import React from 'react';
import { motion } from 'framer-motion';
import './Preloader.css'; // Kita akan buat file CSS-nya

// Varian animasi untuk container preloader (fade out)
const preloaderVariants = {
  initial: { opacity: 1 },
  exit: { 
    opacity: 0,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

// Varian animasi untuk logo/teks di dalam preloader (fade in/out dan scale)
const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
  }
};

function Preloader() {
  return (
    <motion.div
      className="preloader"
      variants={preloaderVariants}
      initial="initial"
      exit="exit" // Animasi akan berjalan saat komponen ini "keluar"
    >
      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
      >
        {/* Anda bisa menggunakan logo atau teks di sini */}
        <img src="/logo512.png" alt="Loading..." className="preloader-logo" />
        {/* atau <h1 className="preloader-text">Rizal Tohir</h1> */}
      </motion.div>
    </motion.div>
  );
}

export default Preloader;
