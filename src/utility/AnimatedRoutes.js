import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Impor semua komponen halaman Anda
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

// Definisikan animasi yang kita inginkan
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw" // Mulai dari luar layar ke kiri
  },
  in: {
    opacity: 1,
    x: 0 // Masuk ke tengah layar
  },
  out: {
    opacity: 0,
    x: "100vw" // Keluar ke kanan layar
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    // AnimatePresence akan mendeteksi kapan Route berubah
    <AnimatePresence mode="wait">
      {/* 'key' pada Routes sangat penting agar AnimatePresence tahu ada perubahan */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <HomePage />
          </motion.div>
        } />
        <Route path="/tentang" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <AboutPage />
          </motion.div>
        } />
        <Route path="/kontak" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ContactPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
