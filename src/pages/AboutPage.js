import React from 'react';
import { motion } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';
import AnimatedText from '../components/AnimatedText';
import Timeline from '../components/Timeline'; // Impor Timeline
import profilePhoto from '../assets/images/profile-pic.jpg';

const skills = [
  'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Node.js', 
  'Express', 'Framer Motion', 'Git', 'GitHub', 'REST API'
];

// Data untuk Timeline
const experienceItems = [
    {
        date: "2022 - Sekarang",
        title: "Web Developer",
        subtitle: "Freelance",
        description: "Merancang dan mengembangkan berbagai jenis website untuk klien, mulai dari situs portofolio hingga aplikasi e-commerce sederhana."
    },
    {
        date: "2020 - 2021",
        title: "Junior Frontend Developer",
        subtitle: "Startup XYZ, Jakarta",
        description: "Berkontribusi dalam pengembangan antarmuka pengguna untuk produk utama perusahaan menggunakan React dan Redux."
    }
];

const educationItems = [
    {
        date: "2016 - 2020",
        title: "Sarjana Teknik Informatika",
        subtitle: "Universitas ABC, Jakarta",
        description: "Fokus pada pengembangan perangkat lunak, struktur data, dan algoritma. Lulus dengan predikat Cum Laude."
    }
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
          {skills.map((skill) => (
            <div key={skill} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>
      
      {/* Seksi Pengalaman */}
      <div className="experience-section">
        <h2 className="about-subtitle">Pengalaman</h2>
        <Timeline items={experienceItems} />
      </div>

      {/* Seksi Pendidikan */}
      <div className="education-section">
        <h2 className="about-subtitle">Pendidikan</h2>
        <Timeline items={educationItems} />
      </div>

    </motion.div>
  );
}

export default AboutPage;