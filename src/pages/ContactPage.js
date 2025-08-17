import React from 'react';
import { motion } from 'framer-motion';
import { FaJsSquare, FaPython, FaJava, FaPhp } from 'react-icons/fa'; // Ikon bahasa
import { SiTypescript, SiCplusplus, SiRust } from 'react-icons/si'; // FaRust diganti dengan SiRust
import usePageTitle from '../hooks/usePageTitle';
import AnimatedText from '../components/AnimatedText';
import profilePhoto from '../assets/images/profile-pic.jpg';

const skills = [
  'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Node.js', 
  'Express', 'Framer Motion', 'Git', 'GitHub', 'REST API'
];

const programmingLanguages = [
  { name: 'JavaScript', icon: <FaJsSquare size={40} color="#f7df1e" /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178c6" /> },
  { name: 'Python', icon: <FaPython size={40} color="#3776ab" /> },
  { name: 'Java', icon: <FaJava size={40} color="#007396" /> },
  { name: 'PHP', icon: <FaPhp size={40} color="#8892be" /> },
  { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" /> },
  { name: 'Rust', icon: <SiRust size={40} color="#000000" /> },
];

function AboutPage() {
  usePageTitle('Tentang Saya | Rizal Tohir');

  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedText 
        text="Passion Fuels Purpose." 
        el="h1" 
        className="about-title" 
        viewport={{ once: true }} 
      />

      <div className="about-content-grid">
        <div className="about-text-section">
          <h2 className="about-subtitle">Biografi</h2>
          <p>
            Halo! Saya Rizal Tohir, seorang web developer kreatif yang bersemangat mengubah ide-ide kompleks menjadi pengalaman digital yang indah, fungsional, dan imersif.
          </p>
          <p>
            Dengan fondasi yang kuat dalam teknologi front-end modern seperti React dan kecintaan pada desain yang bersih, saya fokus untuk membangun antarmuka yang tidak hanya terlihat bagus, tetapi juga terasa intuitif dan responsif.
          </p>
        </div>
        <div className="about-image-section">
          <img src={profilePhoto} alt="Rizal Tohir" />
        </div>
      </div>

      <div className="skills-section">
        <h2 className="about-subtitle">Keahlian Saya</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={skill} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="languages-section">
        <h2 className="about-subtitle">Bahasa Pemrograman</h2>
        <div className="languages-grid">
          {programmingLanguages.map((lang, index) => (
            <div key={lang.name} className="language-card">
              {lang.icon}
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;