import React from 'react'
import HeroSection from '../../components/home/HeroSection';
import Engineering from '../../components/home/Engineering';
import Experience from '../../components/home/Experience';
import Article from '../../components/home/Article';
import Contact from '../../components/home/Contact';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className='snap'>
      <Header />
      <HeroSection />
      <Engineering />
      <Experience />
      <Article />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
