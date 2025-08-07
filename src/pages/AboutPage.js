import React from 'react';
import { motion } from 'framer-motion'; // ✅ Perbaikan penting
import usePageTitle from '../hooks/usePageTitle';
import AnimatedText from '../components/AnimatedText';
import profilePhoto from '../assets/images/profile-pic.jpg';

const skills = [
  'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Node.js', 
  'Express', 'Framer Motion', 'Git', 'GitHub', 'REST API'
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
            <div key={index} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
