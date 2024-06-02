import React from 'react'
import HeroSection from '../../components/home/HeroSection';
import Engineering from '../../components/home/Engineering';
import Experience from '../../components/home/Experience';
import Article from '../../components/home/Article';
import Contact from '../../components/home/Contact';

const Home = () => {
  return (
    <div className='snap'>
      <HeroSection />
      <Engineering />
      <Experience />
      <Article />
      <Contact />
    </div>
  )
}

export default Home;
