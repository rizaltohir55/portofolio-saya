import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

function Timeline({ items }) {
  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={timelineVariants}
        >
          <div className="timeline-content">
            <span className="timeline-date">{item.date}</span>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-subtitle">{item.subtitle}</p>
            <p className="timeline-description">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;