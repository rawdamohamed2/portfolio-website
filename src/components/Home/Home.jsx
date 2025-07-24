import React, { useEffect, useState } from 'react'
import styles from './Home.module.css';
import { Element } from 'react-scroll';

export default function Home() {
  const fullText = "Developer";
  const speed = 100;       
  const deleteSpeed = 50;  
  const delay = 1000;      

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    let typingTimeout;
    if (!isDeleting && i <= fullText.length) {
      typingTimeout = setTimeout(() => {
        setText(fullText.substring(0, i));
        setI(i + 1);
      }, speed);
    } else if (isDeleting && i >= 0) {
      typingTimeout = setTimeout(() => {
        setText(fullText.substring(0, i));
        setI(i - 1);
      }, deleteSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
      }, delay);
    }
    return () => {
      clearTimeout(typingTimeout);
    }
  }, [i, isDeleting]);

    const [lightMode, setLightMode] = useState(false);

    const toggleTheme = () => {
      document.documentElement.classList.toggle("light-mode");
      setLightMode(!lightMode);
    };
    
  return (
    <Element id="Home" name="Home" className={`position-relative overflow-hidden pb-5 start height mainBgcolor`}>
      <div className={styles.divcricle}>
      </div>
      <div className={styles.divcricle1}>
      </div>
      <div className={`container ${styles.minheight} position-relative`}>

          <div className={` ${styles.modeBtn} position-absolute `}>
            <button type='button' onClick={toggleTheme} className="btn btn-theme cardbg rounded-3 ">
              <i className="fas fa-moon fontColor"></i>
            </button>
          </div>

          <div className={`d-flex align-items-center justify-content-center contantmedia text text-center ${styles.minheight}`} data-aos="fade-up" data-aos-delay="250" >
              <div className="contant">
                  <h1 className={`fontColor display-3 display-md-5 fw-medium fontdisplay ${styles.fontheader}`}><span className={`fontfamilyheader d-block display-3 display-md-5 ${styles.fontheaderspan}`}>Hello,</span> 
                      I'm Rawda Mohamed
                  </h1>
                  <h2 className="text  display-5 display-md-0 fw-medium media fontdisplay">Frontend <span className='fontEffect'>{text}</span><span className="cursor">|</span></h2>

                  <div className="buttons mt-4 fontdisplay">
                    <a href="#Projects" type="button" className={`btn ${styles.buttonhero} fontEffect btn-lg btn-md-sm  px-md-4 px-2 py-1 py-md-2`}>Explore My Work</a>
                  </div>
                  
              </div>
          </div>
      </div>
    </Element>
  )
}
