import React from 'react'
import { Element } from 'react-scroll';

export default function Footer() {
  return (
    <div className='container py-5'>
      <div className="row g-4" data-aos="zoom-in" data-aos-delay="200">
        <div className="col-md-12 text-center">
          <h3 className="fontColor fontFamilybody ">Thank you for visiting <span className="fontEffect">my portfolio</span> .</h3>
          <h3 className="fontColor fontFamilybody">I hope my work has given you a clear idea of my skills and passion.</h3>
          <hr className="w-100 fontEffect"/>
        </div>
        <div className="col-md-12 text-center">
          <a href="https://www.linkedin.com/in/rawda-mohamed-367a77370?"><i className="fa-brands fa-linkedin-in icons-hovend px-2"></i></a>
          <a href="https://github.com/rawdamohamed2"><i className="fa-brands fa-github icons-hovend px-2"></i></a>
        </div>
    </div>
    </div>
  )
}
