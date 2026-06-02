import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Zlatovcen Art Design';
const SITE_URL = 'https://www.zlatovcenartdesign.md';
const DEFAULT_IMAGE = `${SITE_URL}/logo_z_art.png`;

export default function SEO({
                                title,
                                description,
                                path = '/',
                                image = DEFAULT_IMAGE,
                                type = 'website',
                                locale = 'ru_MD',
                                noindex = false,
                                schema,
                            }) {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = `${SITE_URL}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>

            <meta name="description" content={description} />
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />

            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content={locale} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}