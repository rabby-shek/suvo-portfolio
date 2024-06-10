import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaReact, FaDatabase, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiJquery, SiMongodb, SiMysql } from 'react-icons/si';

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264DE4" /> },
  { name: "JavaScript", icon: <FaJs color="#F0DB4F" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#563D7C" /> },
  { name: "Tailwind (Basic)", icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "JQuery", icon: <SiJquery color="#0769AD" /> },
  { name: "NodeJS", icon: <FaNodeJs color="#68A063" /> },
  { name: "ExpressJS", icon: <FaNodeJs color="#000" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "PHP", icon: <FaPhp color="#777BB4" /> },
  { name: "ReactJS", icon: <FaReact color="#61DAFB" /> }
];

const Skills = () => {
  return (
    <section className='skills-container'>
      <div className="title" data-aos="fade-up">Skills</div>
      <div className="skills">
        {skills.map((skill, index) => (
          <motion.div
            className="skill"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
