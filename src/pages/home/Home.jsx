import React from "react";
import HeroSection from "../../components/home/HeroSection";
import Engineering from "../../components/home/Engineering";
import Experience from "../../components/home/Certificates";
import Article from "../../components/home/Article";
import Skills from "../../components/home/Skills";
import transition from '../../transition';
const Home = () => {
  return (
    <div className="snap">
      <HeroSection />
      <Engineering />
      <Skills />
      <Experience />
      <Article />
    </div>
  );
};

export default transition(Home);
