import { Route, Routes } from 'react-router-dom';
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
import MainHome from './Components/MainHome/MainHome';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<MainHome />}/>
        <Route path='/aboutme'  element={<Aboutme />}/>
      </Routes>
      

      
      {/* <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer /> */}
      <Footer />
    </div>
  );
}

export default App;
