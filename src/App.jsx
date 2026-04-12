import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ZADefault from './components/layout/ZADefault.jsx';

import Home from './pages/Home/Home.jsx';
import PortfolioPage from './pages/Portfolio/PortfolioPage.jsx';
import PortfolioDetailPage from "./pages/PortfolioDetail/PortfolioDetailPage.jsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";
import BlogPage from "./pages/Blog/BlogPage.jsx";
import BlogPostPage from "./pages/BlogPost/BlogPostPage.jsx";

export default function App() {
    return (
        <ZADefault>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<PortfolioPage />} />
                <Route path='/portfolio/:id' element={<PortfolioDetailPage />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/blog/:id' element={<BlogPostPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </ZADefault>
    );
}