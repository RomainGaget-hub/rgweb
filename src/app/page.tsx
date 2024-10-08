'use client'

// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import BlogPreview from './components/BlogPreview';
import Footer from './components/Footer';
// Import CSS
import './styles/theme.css';
import Skills from './components/Skills';

const Home = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div data-theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <main>
        <Profile />
        <Skills />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
