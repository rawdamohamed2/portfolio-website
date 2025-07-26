import Educationstyle from './Education.module.css';
import { Element } from 'react-scroll';
export default function Education() {
 

  return (
    <Element id="Education" className="minheight py-5 h-100 mainBgcolor">
      <div className="container h-100">

        <div className="headercontant pb-4" data-aos="zoom-in" data-aos-delay="500">
          <h1 className="fontColor display-5 fw-semibold text-center">My <span className="fontEffect">Education</span></h1>
          <hr className="fontEffect w-100 mt-4"/>
        </div>

        <div className="row g-4 px-2 py-3 ">

          <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="500">
            <div className={`text-center h-100 w-100 p-3 ${Educationstyle.Educationhover} ${Educationstyle.height} rounded-3`}>
              <h5>Bachelor of Computer Science</h5>
              <p className="fw-light mt-md-4 mt-1 mb-md-1 mb-0 fontsize">Faculty of Science, Alexandria University</p>
              <p className="fw-light mb-md-1 mb-0 fontsize">Fourth-Year Student <span className="fontEffect">|</span> [ 2022 - 2026 ]</p>
              <p className="fw-light mb-md-1 mb-0 fontsize">GPA: <span className=""> 3.73 </span></p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="500">
            <div className={`text-center h-100 w-100 p-3 ${Educationstyle.Educationhover} ${Educationstyle.height} rounded-3`}>
              <h5>Frontend Developer Internship</h5>
              <p className="fw-light mt-md-4 mt-1 mb-md-1 mb-0 fontsize">Built real projects using React.js and JavaScript.</p>
              <p className="fw-light mb-md-1 mb-0 fontsize">CodeAlpha <span className="fontEffect">|</span> [ June – July 2025 ]</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="500">
            <div className={`text-center h-100 w-100 p-3 ${Educationstyle.Educationhover} ${Educationstyle.height} rounded-3`}>
              <h5>Web Design & Freelancing Internship</h5>
              <p className="fw-light mt-md-4 mt-1 mb-md-1 mb-0 fontsize">NTI – Ministry of Communications, Egypt </p>
              <p className="fw-light mb-md-1 mb-0 fontsize">Learned design principles and freelancing skills.</p>
              <p className="fw-light mb-md-1 mb-0 fontsize"> 2025</p>
            </div>
          </div>
        </div>   

      </div>
    </Element>
  )
}
