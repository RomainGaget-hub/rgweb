'use client'

// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import BlogPreview from './components/BlogPreview';
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



  return (
    <section className='py-24'>
      <div className="container max-w-3xl">
        <Profile />
        <Skills />
        <BlogPreview />
      </div>
    </section>
  );
};

export default Home;
