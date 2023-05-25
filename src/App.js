import './App.css';
import About from './Components/About';
import DevelopedBy from './Components/DevelopedBy';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <DevelopedBy />
    </div>
  );
}

export default App;
