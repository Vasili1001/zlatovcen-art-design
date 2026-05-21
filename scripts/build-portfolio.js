import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const SOURCE_ROOT = path.join(projectRoot, 'content', 'portfolio-source', 'all_projects');
const OUTPUT_ROOT = path.join(projectRoot, 'public', 'media', 'portfolio');
const GENERATED_DATA_FILE = path.join(projectRoot, 'src', 'data', 'portfolioProjects.generated.js');

const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

const IMAGE_PRESETS = {
    cover: {
        width: 1200,
        quality: 82,
    },
    hero: {
        width: 2200,
        quality: 84,
    },
    thumb: {
        width: 640,
        quality: 80,
    },
    gallery: {
        width: 1800,
        quality: 82,
    },
};

const toPosix = (value) => value.split(path.sep).join('/');

const pad = (value, length = 2) => String(value).padStart(length, '0');

const escapeForJs = (value) =>
    String(value)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'");

const getLeadingNumber = (value) => {
    const match = String(value).match(/^(\d+)/);
    return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
};

const getFileNumber = (fileName) => {
    const baseName = path.parse(fileName).name;
    const match = baseName.match(/(\d+)/);
    return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
};

const cleanProjectTitle = (folderName) =>
    String(folderName)
        .replace(/^\d+\./, '')
        .replace(/[_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

const cleanProjectCategory = (title) => {
    const upper = title.toUpperCase();

    if (upper.includes('КВАРТИРА')) return 'Apartment Interior';
    if (upper.includes('ТАУН-ХАУС') || upper.includes('ТАУН ХАУС')) return 'Townhouse Interior';
    if (upper.includes('ЧАСТНЫЙ ДОМ') || upper.includes('ЧАСТНЫЙ ДОМ')) return 'Private Residence';
    if (upper.includes('КУХНЯ')) return 'Kitchen Design';
    if (upper.includes('КАБИНЕТ')) return 'Private Office Interior';
    if (upper.includes('САЛОН')) return 'Commercial Interior';
    if (upper.includes('ЖК')) return 'Residential Interior';

    return 'Interior Design Project';
};

const defaultAltForImage = (title, index) => `${title} interior photo ${index}`;

const sortByLeadingNumber = (items) =>
    [...items].sort((a, b) => {
        const numberA = getLeadingNumber(a);
        const numberB = getLeadingNumber(b);

        if (numberA !== numberB) {
            return numberA - numberB;
        }

        return String(a).localeCompare(String(b), 'ru');
    });

const sortFilesByNumericOrder = (items) =>
    [...items].sort((a, b) => {
        const numberA = getFileNumber(a);
        const numberB = getFileNumber(b);

        if (numberA !== numberB) {
            return numberA - numberB;
        }

        return String(a).localeCompare(String(b), 'ru');
    });

const ensureDirectory = async (directoryPath) => {
    await fs.mkdir(directoryPath, { recursive: true });
};

const emptyDirectory = async (directoryPath) => {
    await fs.rm(directoryPath, { recursive: true, force: true });
    await fs.mkdir(directoryPath, { recursive: true });
};

const isSupportedImageFile = (fileName) => {
    const extension = path.extname(fileName).toLowerCase();
    return SUPPORTED_EXTENSIONS.has(extension);
};

const getDirectoryEntries = async (directoryPath) => {
    const entries = await fs.readdir(directoryPath, { withFileTypes: true });
    return entries;
};

const buildWebp = async (inputPath, outputPath, { width, quality }) => {
    await sharp(inputPath)
        .rotate()
        .resize({
            width,
            withoutEnlargement: true,
        })
        .webp({
            quality,
            effort: 6,
        })
        .toFile(outputPath);
};

const serializeProjectsToJs = (projects) => {
    const lines = [];

    lines.push('export const portfolioProjectsGenerated = [');

    projects.forEach((project) => {
        lines.push('    {');
        lines.push(`        id: '${escapeForJs(project.id)}',`);
        lines.push(`        order: ${project.order},`);
        lines.push(`        slug: '${escapeForJs(project.slug)}',`);
        lines.push(`        sourceFolder: '${escapeForJs(project.sourceFolder)}',`);
        lines.push(`        title: '${escapeForJs(project.title)}',`);
        lines.push(`        category: '${escapeForJs(project.category)}',`);
        lines.push(`        featured: false,`);
        lines.push(`        coverImage: '${escapeForJs(project.coverImage)}',`);
        lines.push(`        coverAlt: '${escapeForJs(project.coverAlt)}',`);
        lines.push(`        heroImage: '${escapeForJs(project.heroImage)}',`);
        lines.push(`        heroAlt: '${escapeForJs(project.heroAlt)}',`);
        lines.push(`        thumbImage: '${escapeForJs(project.thumbImage)}',`);
        lines.push(`        thumbAlt: '${escapeForJs(project.thumbAlt)}',`);
        lines.push('        galleryImages: [');

        project.galleryImages.forEach((image) => {
            lines.push('            {');
            lines.push(`                src: '${escapeForJs(image.src)}',`);
            lines.push(`                alt: '${escapeForJs(image.alt)}',`);
            lines.push(`                order: ${image.order},`);
            lines.push('            },');
        });

        lines.push('        ],');
        lines.push('    },');
    });

    lines.push('];');
    lines.push('');

    return lines.join('\n');
};

const createProjectRecord = ({
                                 order,
                                 sourceFolder,
                                 title,
                                 category,
                                 coverImage,
                                 heroImage,
                                 thumbImage,
                                 galleryImages,
                             }) => {
    const id = `project-${pad(order)}`;

    return {
        id,
        order,
        slug: id,
        sourceFolder,
        title,
        category,
        coverImage,
        coverAlt: `${title} project cover image`,
        heroImage,
        heroAlt: `${title} project hero image`,
        thumbImage,
        thumbAlt: `${title} project thumbnail image`,
        galleryImages,
    };
};

const processProject = async ({ folderName, order }) => {
    const sourceProjectDir = path.join(SOURCE_ROOT, folderName);
    const outputProjectDir = path.join(OUTPUT_ROOT, `project-${pad(order)}`);
    const outputGalleryDir = path.join(outputProjectDir, 'gallery');

    const entries = await getDirectoryEntries(sourceProjectDir);
    const imageFiles = sortFilesByNumericOrder(
        entries
            .filter((entry) => entry.isFile() && isSupportedImageFile(entry.name))
            .map((entry) => entry.name)
    );

    if (!imageFiles.length) {
        throw new Error(`No supported image files found in project folder: ${folderName}`);
    }

    await ensureDirectory(outputGalleryDir);

    const title = cleanProjectTitle(folderName);
    const category = cleanProjectCategory(title);

    const firstImageName = imageFiles[0];
    const firstImagePath = path.join(sourceProjectDir, firstImageName);

    const coverOutputPath = path.join(outputProjectDir, 'cover.webp');
    const heroOutputPath = path.join(outputProjectDir, 'hero.webp');
    const thumbOutputPath = path.join(outputProjectDir, 'thumb.webp');

    await Promise.all([
        buildWebp(firstImagePath, coverOutputPath, IMAGE_PRESETS.cover),
        buildWebp(firstImagePath, heroOutputPath, IMAGE_PRESETS.hero),
        buildWebp(firstImagePath, thumbOutputPath, IMAGE_PRESETS.thumb),
    ]);

    const galleryImages = [];

    for (let index = 0; index < imageFiles.length; index += 1) {
        const imageName = imageFiles[index];
        const imageOrder = index + 1;
        const sourceImagePath = path.join(sourceProjectDir, imageName);
        const outputImageName = `${pad(imageOrder)}.webp`;
        const outputImagePath = path.join(outputGalleryDir, outputImageName);

        await buildWebp(sourceImagePath, outputImagePath, IMAGE_PRESETS.gallery);

        galleryImages.push({
            src: toPosix(`/media/portfolio/project-${pad(order)}/gallery/${outputImageName}`),
            alt: defaultAltForImage(title, imageOrder),
            order: imageOrder,
        });
    }

    return createProjectRecord({
        order,
        sourceFolder: folderName,
        title,
        category,
        coverImage: toPosix(`/media/portfolio/project-${pad(order)}/cover.webp`),
        heroImage: toPosix(`/media/portfolio/project-${pad(order)}/hero.webp`),
        thumbImage: toPosix(`/media/portfolio/project-${pad(order)}/thumb.webp`),
        galleryImages,
    });
};

const validateSourceRoot = async () => {
    try {
        const stat = await fs.stat(SOURCE_ROOT);

        if (!stat.isDirectory()) {
            throw new Error();
        }
    } catch {
        throw new Error(
            `Source directory not found: ${SOURCE_ROOT}\nCreate it and place the all_projects folders there.`
        );
    }
};

const buildPortfolio = async () => {
    await validateSourceRoot();
    await emptyDirectory(OUTPUT_ROOT);

    const entries = await getDirectoryEntries(SOURCE_ROOT);
    const projectFolders = sortByLeadingNumber(
        entries
            .filter((entry) => entry.isDirectory())
            .map((entry) => entry.name)
    );

    if (!projectFolders.length) {
        throw new Error(`No project folders found in: ${SOURCE_ROOT}`);
    }

    const projects = [];

    for (const folderName of projectFolders) {
        const order = getLeadingNumber(folderName);

        if (!Number.isFinite(order)) {
            throw new Error(`Project folder does not start with a number: ${folderName}`);
        }

        const project = await processProject({
            folderName,
            order,
        });

        projects.push(project);
    }

    const jsContent = serializeProjectsToJs(projects);

    await ensureDirectory(path.dirname(GENERATED_DATA_FILE));
    await fs.writeFile(GENERATED_DATA_FILE, jsContent, 'utf8');

    const summary = {
        projectCount: projects.length,
        imageCount: projects.reduce((total, project) => total + project.galleryImages.length, 0),
        outputRoot: OUTPUT_ROOT,
        generatedDataFile: GENERATED_DATA_FILE,
    };

    return summary;
};

const run = async () => {
    try {
        const summary = await buildPortfolio();

        console.log('');
        console.log('Portfolio build completed successfully.');
        console.log(`Projects: ${summary.projectCount}`);
        console.log(`Gallery images: ${summary.imageCount}`);
        console.log(`Output media: ${summary.outputRoot}`);
        console.log(`Generated data: ${summary.generatedDataFile}`);
        console.log('');
    } catch (error) {
        console.error('');
        console.error('Portfolio build failed.');
        console.error(error instanceof Error ? error.message : error);
        console.error('');
        process.exitCode = 1;
    }
};

run();