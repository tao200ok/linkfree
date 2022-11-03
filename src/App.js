import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </ Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
