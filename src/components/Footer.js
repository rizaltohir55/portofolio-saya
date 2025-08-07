import React from 'react';
import './Footer.css'; // Kita akan membuat file CSS ini sebentar lagi

function Footer() {
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini secara otomatis

  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} Rizal Tohir. Semua Hak Cipta Dilindungi.</p>
      <p>
        <a href="https://github.com/rizaltohir55" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* Ganti link LinkedIn dengan profil Anda */}
      </p>
    </footer>
   );
}

export default Footer;
