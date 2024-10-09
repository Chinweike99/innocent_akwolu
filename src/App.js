import { Route, Router } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aboutme from './Components/AboutMe/Aboutme';


function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/aboutme'  element={<Aboutme />}/>
      </Router>
      <ToastContainer />
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
