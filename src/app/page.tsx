'use client';

// pages/index.tsx

import Profile from '../components/Profile';
import BlogPreview from './components/BlogPreview';
// Import CSS
import Skills from './components/Skills';

const Home = () => {


  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Profile />
        <Skills />
        <BlogPreview />
      </div>
    </section>
  );
};

export default Home;
