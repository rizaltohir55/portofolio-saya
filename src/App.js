import './App.css';
import Header from './components/Header';
// Langkah 1: Impor komponen Portfolio
import Portfolio from './components/Portfolio'; 

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        {/* Langkah 2: Tampilkan komponen Portfolio di sini */}
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
