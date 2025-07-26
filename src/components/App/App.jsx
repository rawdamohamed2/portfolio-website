import { useEffect } from 'react';
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import AnimatedBg from '../AnimatedBg/AnimatedBg';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,    
    });
  }, []);

  return (
    
    <>
      <Navbar/>
      <AnimatedBg/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}
