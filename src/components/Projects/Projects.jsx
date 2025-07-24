import Projectstyle from './Projects.module.css';
import curd from '../../assets/images/curd.png';
import fokir from '../../assets/images/fokir.png';
import gallery from '../../assets/images/gallery.png';
import weather from '../../assets/images/weather.png';
import game from '../../assets/images/game.png';
import { Element ,Link } from 'react-scroll';
import Portfolio from '../../assets/images/Portfolio.png';
import VanillaTilt from 'vanilla-tilt';
import { useEffect } from 'react';
export default function Projects() {
  useEffect(() => {
  const elements = document.querySelectorAll("[data-tilt]");
  VanillaTilt.init(elements, {
    max: 10,
  });
}, []);

  return (
  <>
    <Element name="Projects" className="height py-5 h-100 secondBgcolor">
      <div className="container h-100">

        <div className="haederProjects" data-aos="zoom-in" data-aos-delay="200">
          <h1 className="fontColor text-center "><span className="fontEffect">My</span>  projects</h1>
          <hr className="fontEffect w-25 w-md-50 m-auto mb-5 mt-4 "/>
        </div>
        <div className="row g-4">

          <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="100">
            <div className={`card cardbg border-0 rounded-4 overflow-hidden h-100 ${Projectstyle.projectHover}`} data-tilt data-tilt-max="10">
              <img src={game} className={`card-img-top w-100  ${Projectstyle.projectImg}`} alt="projectPhoto" loading='lazy' />
              <div className={`card-body cardbg overflow-hidden`}>
                <h4 className="card-title websitsTag text-center fontColor">Game Reviews Website</h4>
                <p className={`card-text text-center secondfontColor py-3 ${Projectstyle.cardText}`}> A responsive game store interface using HTML, CSS, Bootstrap, and JavaScript. It fetches and displays game data from an API in styled cards with modals for details.It allows users to read detailed reviews.</p>
                
                <div className="buttons text-center row g-3">
                  <div className="col-lg-7 col-md-12">
                      <a href="https://rawdamohamed2.github.io/Game-Reviews/" className="btn buttonHover w-100">Live Demo</a>
                  </div>
                  <div className="col-lg-5 col-md-12 ">
                       <a href="https://github.com/rawdamohamed2/Game-Reviews" className="btn buttonHover  w-100 ">GitHub</a>
                  </div>
                  
                 
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className={`card cardbg border-0 rounded-4 overflow-hidden h-100 ${Projectstyle.projectHover}`} data-tilt data-tilt-max="10">
              <img src={weather} className={`card-img-top w-100  ${Projectstyle.projectImg}`} alt="projectPhoto" loading='lazy'/>
              <div className={`card-body cardbg ${Projectstyle.bodyHover}`}>
                <h4 className="card-title websitsTag text-center fontColor">Weather Website</h4>
                <p className="card-text text-center secondfontColor ">A weather forecast website that fetches real-time weather data using an external API. It displays current temperature, weather conditions, and city-specific information — built with HTML, CSS, JavaScript, and Axios for API integration.</p>
                <div className="buttons text-center row g-3">
                  <div className="col-lg-7 col-md-12">
                      <a href="https://rawdamohamed2.github.io/weather-Web/" className="btn buttonHover w-100">Live Demo</a>
                  </div>
                  <div className="col-lg-5 col-md-12 ">
                       <a href="https://github.com/rawdamohamed2/weather-Web" className="btn buttonHover  w-100 ">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className={`card cardbg border-0 rounded-4 overflow-hidden h-100 ${Projectstyle.projectHover}`} data-tilt data-tilt-max="10">
              <img src={fokir} className={`card-img-top w-100  ${Projectstyle.projectImg}`} alt="projectPhoto" loading='lazy' />
              <div className={`card-body cardbg ${Projectstyle.bodyHover}`}>
                <h4 className="card-title websitsTag text-center fontColor">Fokir Website</h4>
                <p className="card-text text-center secondfontColor ">A personal portfolio website inspired by the Fokir template, built to practice and enhance my frontend development skills using HTML, CSS, Bootstrap, and JavaScript  featuring responsive design, smooth scrolling, and interactive UI elements.</p>
                <div className="buttons text-center row g-3">
                  <div className="col-lg-7 col-md-12">
                      <a href="https://rawdamohamed2.github.io/Fokir-Web/" className="btn buttonHover w-100">Live Demo</a>
                  </div>
                  <div className="col-lg-5 col-md-12 ">
                       <a href="https://github.com/rawdamohamed2/Fokir-Web" className="btn buttonHover  w-100 ">GitHub</a>
                  </div>
                </div> 
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className={`card cardbg border-0 rounded-4 overflow-hidden h-100 ${Projectstyle.projectHover}`} data-tilt data-tilt-max="10">
              <img src={curd} className={`card-img-top w-100  ${Projectstyle.projectImg}`} alt="projectPhoto" loading='lazy'/>
              <div className={`card-body cardbg ${Projectstyle.bodyHover}`}>
                <h4 className="card-title websitsTag text-center fontColor" >Product Management Website</h4>
                <p className="card-text text-center secondfontColor ">A dynamic CRUD (Create, Read, Update, Delete) system website that allows users to manage data entries efficiently through an interactive interface developed using HTML, CSS, JavaScript, and localStorage for data persistence.</p>
                <div className="buttons text-center row g-3">
                  <div className="col-lg-7 col-md-12">
                      <a href="https://rawdamohamed2.github.io/Product-CRUD/"  className="btn buttonHover w-100">Live Demo</a>
                  </div>
                  <div className="col-lg-5 col-md-12 ">
                       <a href="https://github.com/rawdamohamed2/Product-CRUD"  className="btn buttonHover  w-100 ">GitHub</a>
                  </div>
                </div> 
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="5000">
            <div className={`card cardbg border-0 rounded-4 overflow-hidden h-100 ${Projectstyle.projectHover}`} data-tilt data-tilt-max="10">
              <img src={gallery} className={`card-img-top w-100  ${Projectstyle.projectImg}`} alt="projectPhoto" loading='lazy'/>
              <div className="card-body cardbg bodyHover">
                <h4 className="card-title websitsTag text-center fontColor">Gallery Website</h4>
                <p className="card-text text-center secondfontColor ">A responsive and interactive gallery website that allows users to filter images by category, preview them in a modal, switch between light/dark modes, and save favorites using localStorage  built with HTML, CSS, JavaScript, and Bootstrap.</p>
                <div className="buttons text-center row g-3">
                  <div className="col-lg-7 col-md-12">
                      <a href=" https://rawdamohamed2.github.io/CodeAlpha_ImageGallery/"  className="btn buttonHover w-100">Live Demo</a>
                  </div>
                  <div className="col-lg-5 col-md-12 ">
                       <a href="https://github.com/rawdamohamed2/CodeAlpha_ImageGallery"  className="btn buttonHover  w-100 ">GitHub</a>
                  </div>
                </div>             
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="5000">
            <div className={`card cardbg border-0 rounded-4 overflow-hidden h-100 ${Projectstyle.projectHover}`} data-tilt data-tilt-max="10">
              <img src={Portfolio} className={`card-img-top w-100  ${Projectstyle.projectImg}`} alt="projectPhoto" loading='lazy'/>
              <div className="card-body cardbg bodyHover">
                <h4 className="card-title websitsTag text-center fontColor">My Portfolio Website</h4>
                <p className="card-text text-center secondfontColor ">My first React project is a responsive portfolio site using React, Bootstrap, and JavaScript. It features smooth scroll, active link highlighting, dark mode, animations, a validated contact form, and is hosted on GitHub Pages.</p>
                <div className="buttons text-center row g-3">
                  <div className="col-lg-7 col-md-12">
                      <a href=" https://rawdamohamed2.github.io/CodeAlpha_ImageGallery/"  className="btn buttonHover w-100">Live Demo</a>
                  </div>
                  <div className="col-lg-5 col-md-12 ">
                       <a href="https://github.com/rawdamohamed2/CodeAlpha_ImageGallery"  className="btn buttonHover  w-100 ">GitHub</a>
                  </div>
                </div>             
              </div>
            </div>
          </div>

        </div>
      </div>
    </Element>

  </>
    
  )
}
