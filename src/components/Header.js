import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import profilePhoto from '../assets/images/profile-pic.jpg';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `header ${scrolled || !isHomePage ? 'scrolled' : ''}`;

  return (
    <header className={headerClasses}>
      <div className="header-logo">
        <img src={profilePhoto} alt="Rizal Tohir" className="logo-photo" />
        <div>
          <h1>Rizal Tohir</h1>
          <p>Web Developer</p>
        </div>
      </div>
      <nav className="header-nav">
        <NavLink to="/" end>Beranda</NavLink>
        <NavLink to="/tentang-saya">Tentang Saya</NavLink>
        <NavLink to="/kontak">Kontak</NavLink>
      </nav>
    </header>
  );
}

export default Header;
