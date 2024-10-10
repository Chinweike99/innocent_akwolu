import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aboutme from './Components/AboutMe/Aboutme';
import MainHome from './Components/MainHome/MainHome';


function App() {
  return (
    <div className="App">
      <ToastContainer />
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
