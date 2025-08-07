import React from 'react';
import { motion } from 'framer-motion';

const ProjectShowcase = ({ project, index }) => {
  const isOdd = index % 2 !== 0;
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  return (
    <motion.div className={`project-showcase ${isOdd ? 'odd' : ''}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={variants}>
      <div className="project-text-content">
        <span className="project-number">0{index + 1}</span>
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-list">
          {project.technologies.map(tech => <span key={tech}>{tech}</span>)}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Lihat Proyek</a>
        </div>
      </div>
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} />
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;
