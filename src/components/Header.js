// Langkah 1: Impor React (wajib untuk setiap komponen)
import React from 'react';

// Langkah 2: Buat fungsi komponen
function Header() {
  // Langkah 3: Komponen mengembalikan elemen JSX (tampilan)
  return (
    <header className="App-header">
      <img src="/logo192.png" className="App-logo" alt="logo" />
      <h1>Portofolio Rizal Tohir</h1>
      <p>Seorang Web Developer Pemula</p>
    </header>
  );
}

// Langkah 4: Ekspor komponen agar bisa digunakan di file lain
export default Header;
