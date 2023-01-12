import './App.css';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { NavBar } from './Components/NavBar/NavBar';
import { Skills } from './Components/Skills/Skills';
/* import { Services } from "./Components/Services/Services" */
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';
import { Footer } from "./Components/Footer/Footer";


function App() {
  return (
    <div className='App'>
      <NavBar />
      <main className="main" >
        <Home />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
