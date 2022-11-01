import './App.css';

import Profile from './components/Profile/Profile';
import Links from './components/Links/Links';
import Footer from './components/Footer/Footer';
import Social from './components/Social/Social';

function App() {
  return (
    <div className="App">
      <main>
        <Profile />
        <Links />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

export default App;
