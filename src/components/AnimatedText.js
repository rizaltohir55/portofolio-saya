import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.4 },
  }),
};

const childVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const AnimatedText = ({ text, el: Wrapper = 'p', className, ...props }) => {
  const words = text.split(' ');

  return (
    <Wrapper className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block', marginRight: '0.5em' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          {...props}
        >
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span 
              key={letterIndex} 
              style={{ display: 'inline-block' }}
              variants={childVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </Wrapper>
  );
};

export default AnimatedText;
