import './App.css';
import Profile from './components/Profile/Profile';
import Links from './components/Links/Links';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Profile />
        <Links />
      </main>
      <Footer />
    </div>
  );
}

export default App;
