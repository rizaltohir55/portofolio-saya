import React from 'react';

// Ini adalah data contoh proyek kita.
// Nanti kita bisa memindahkannya ke file terpisah.
const projects = [
  {
    id: 1,
    title: "Proyek Website E-commerce",
    description: "Sebuah toko online yang dibangun menggunakan React dan Node.js.",
    tech: "React, Node.js, Express, CSS"
  },
  {
    id: 2,
    title: "Aplikasi Catatan Pribadi",
    description: "Aplikasi sederhana untuk membuat dan mengelola catatan harian.",
    tech: "React, JavaScript, Local Storage"
  },
  {
    id: 3,
    title: "Website Portofolio (Proyek Ini)",
    description: "Website yang sedang Anda lihat sekarang, dibuat untuk menampilkan karya saya.",
    tech: "React, CSS Modules, GitHub Pages"
  }
];

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>Proyek Saya</h2>
      <div className="projects-grid">
        {/* Kita akan 'map' atau 'looping' data proyek di sini */}
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>Teknologi: {project.tech}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
