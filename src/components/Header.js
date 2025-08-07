import React from 'react';
import { Link } from 'react-router-dom'; // Impor komponen Link untuk navigasi

function Header() {
  return (
    <header className="App-header">
      {/* Bagian Kiri: Logo dan Judul */}
      <div className="header-left">
        <img src="/logo192.png" className="App-logo" alt="logo" />
        <div>
          {/* Link di judul agar bisa kembali ke Beranda saat diklik */}
          <Link to="/" className="header-title-link">
            <h1>Portofolio Rizal Tohir</h1>
          </Link>
          <p>Seorang Web Developer Pemula</p>
        </div>
      </div>

      {/* Bagian Kanan: Navigasi */}
      <nav>
        <Link to="/">Beranda</Link>
        <Link to="/tentang">Tentang Saya</Link>
        <Link to="/kontak">Kontak</Link>
      </nav>
    </header>
  );
}

export default Header;
