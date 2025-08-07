import React from 'react';
import { motion } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';
import AnimatedText from '../components/AnimatedText';
import ProjectShowcase from '../components/ProjectShowcase';

import ecommerceImg from '../assets/images/project-ecommerce.jpg';
import notesImg from '../assets/images/project-notes.jpg';
import portfolioImg from '../assets/images/project-portfolio.jpg';

const projects = [
  { id: 1, title: "Proyek Website E-commerce", description: "Sebuah toko online yang dibangun menggunakan React dan Node.js.", technologies: ["React", "Node.js", "Express"], image: ecommerceImg, githubUrl: "https://github.com/rizaltohir55" },
  { id: 2, title: "Aplikasi Catatan Pribadi", description: "Aplikasi sederhana untuk membuat dan mengelola catatan harian.", technologies: ["React", "JavaScript", "Local Storage"], image: notesImg, githubUrl: "https://github.com/rizaltohir55" },
  { id: 3, title: "Website Portofolio (Proyek Ini )", description: "Website yang sedang Anda lihat sekarang, dibuat untuk menampilkan karya saya.", technologies: ["React", "Framer Motion", "CSS"], image: portfolioImg, githubUrl: "https://github.com/rizaltohir55/portofolio-saya" }
];

function HomePage( ) {
  usePageTitle('Rizal Tohir | Web Developer');
  return (
    <>
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatedText text="Creative Developer" el="h1" className="hero-title" viewport={{ once: true }} />
        <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}>
          Mengubah ide menjadi pengalaman digital yang imersif dan fungsional.
        </motion.p>
      </motion.section>
      <section className="projects-list-section">
        {projects.map((project, index) => (
          <ProjectShowcase key={project.id} project={project} index={index} />
        ))}
      </section>
    </>
  );
}
export default HomePage;
