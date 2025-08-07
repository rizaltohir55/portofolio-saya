import React from 'react';

// Gaya CSS bisa kita letakkan di file terpisah nanti,
// untuk sekarang kita gunakan inline style untuk contoh.
const aboutStyle = {
  maxWidth: '800px',
  margin: '40px auto',
  padding: '20px',
  backgroundColor: 'white',
  border: '1px solid #ddd',
  borderRadius: '8px',
  textAlign: 'left',
  lineHeight: '1.6'
};

function AboutPage() {
  return (
    <div style={aboutStyle}>
      <h2>Tentang Saya</h2>
      <p>
        Halo! Nama saya Rizal Tohir. Saya adalah seorang web developer pemula yang bersemangat 
        untuk belajar dan membangun aplikasi web yang bermanfaat dan menarik. Saya memiliki 
        ketertarikan mendalam pada teknologi frontend, terutama React.
      </p>
      <p>
        Website portofolio ini adalah salah satu proyek saya untuk mempraktikkan dan 
        menunjukkan kemampuan saya dalam menggunakan React, membuat komponen, mengelola state, 
        dan mengimplementasikan routing.
      </p>
      <h3>Keterampilan</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Git & GitHub</li>
        <li>Node.js (Dasar)</li>
      </ul>
    </div>
  );
}

export default AboutPage;
