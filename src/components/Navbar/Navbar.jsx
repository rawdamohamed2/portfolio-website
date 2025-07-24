import React, { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('Home'); 
      const homeHeight = homeSection?.offsetHeight || 0;
      const currentScroll = window.scrollY;

      if (currentScroll > homeHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id='Navbar' className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
      <div className="container">
        <Link className="navbar-brand fontfamily ">Rawda</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="Home" smooth={true} spy={true} activeClass="active" offset={-120}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='AboutMe' smooth={true} spy={true} activeClass="active" offset={-120}>About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='Education' smooth={true} spy={true} activeClass="active" offset={-120}>Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='Projects' smooth={true} spy={true} activeClass="active" offset={-120}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='Skills' smooth={true} spy={true} activeClass="active" offset={-120}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='Contact' smooth={true} spy={true} activeClass="active" offset={-120}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
