import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Impor komponen tata letak (layout)
import Header from './components/Header';
import Footer from './components/Footer';

// Impor semua komponen halaman (pages)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header dan Footer akan selalu tampil di setiap halaman */}
        <Header />

        {/* Bagian 'main' adalah tempat konten halaman akan berganti-ganti */}
        <main>
          <Routes>
            {/* Aturan 1: Jika URL adalah '/', tampilkan HomePage */}
            <Route path="/" element={<HomePage />} />
            
            {/* Aturan 2: Jika URL adalah '/tentang', tampilkan AboutPage */}
            <Route path="/tentang" element={<AboutPage />} />

            {/* Aturan 3: Jika URL adalah '/kontak', tampilkan ContactPage */}
            <Route path="/kontak" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
