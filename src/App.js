import './App.css';
import About from './Components/About';
import DevelopedBy from './Components/DevelopedBy';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='App text-lg'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <DevelopedBy />
    </div>
  );
}

export default App;
