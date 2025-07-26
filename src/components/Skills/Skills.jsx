import skillStyle from './Skills.module.css'
import jquery from '../../assets/images/jquery.png'
import tailwindcss from '../../assets/images/tailwindcss.png'
import typescript from '../../assets/images/typescript.png'

import { Element } from 'react-scroll';
export default function Skills() {


  return (
    <Element name="Skills" className=" py-5 h-100 mainBgcolor ">
      <div className="container">

          <div className="haederProjects pb-5 text-center" data-aos="zoom-in" data-aos-delay="500">
        <h1 className=" py-4">My <span className="fontEffect">Skills</span></h1>
        <hr className="w-100 fontEffect"/>
          </div>

          <div className="row g-4 px-md-0 p-4">
            <div className='col-lg-2 col-md-4' data-aos="flip-left" data-aos-delay="600">
              <div className={`card cardbg border-0  w-100 ${skillStyle.skillCradHover} rounded-4 overflow-hidden ${skillStyle.cardHeight}`}> 
                <div className={`card-body h-100 mt-4 ${skillStyle.skillBodyHover}`}>
                  <h1 className="card-title text-center fontEffect"><i className="fa-brands fa-html5 card-img-top display-3"></i></h1>
                  <h3 className="card-text text-center secondfontColor">HTML</h3>
                </div>
              </div>
            </div>                   
            <div className='col-lg-2 col-md-4' data-aos="flip-left" data-aos-delay="600">
              <div className={`card cardbg border-0  w-100 ${skillStyle.skillCradHover} rounded-4 overflow-hidden ${skillStyle.cardHeight}`}> 
                <div className={`card-body h-100 mt-4 ${skillStyle.skillBodyHover}`}>
                  <h1 className="card-title text-center fontEffect"><i className="fa-brands fa-square-js display-3"></i></h1>
                  <h3 className="card-text text-center secondfontColor   ">JavaScript</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4' data-aos="flip-left" data-aos-delay="600">
              <div className={`card cardbg border-0  w-100 ${skillStyle.skillCradHover} rounded-4 overflow-hidden ${skillStyle.cardHeight}`}> 
                <div className={`card-body h-100 mt-4 ${skillStyle.skillBodyHover}`}>
                  <h1 className="card-title text-center fontEffect"><i className="fa-brands fa-css display-3"></i></h1>
                  <h3 className="card-text text-center secondfontColor  "> CSS</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4' data-aos="flip-left" data-aos-delay="600">
              <div className={`card cardbg border-0  w-100 ${skillStyle.skillCradHover} rounded-4 overflow-hidden ${skillStyle.cardHeight}`}> 
                <div className={`card-body h-100 mt-4 ${skillStyle.skillBodyHover}`}>
                  <h1 className="card-title text-center fontEffect"><i className="fa-brands fa-bootstrap display-3"></i></h1>
                  <h3 className="card-text text-center secondfontColor  ">Bootstrap</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4' data-aos="flip-left" data-aos-delay="600">
              <div className={`card cardbg border-0  w-100 ${skillStyle.skillCradHover} rounded-4 overflow-hidden ${skillStyle.cardHeight}`}> 
                <div className={`card-body h-100 mt-4 ${skillStyle.skillBodyHover}`}>
                  <h1 className="card-title text-center fontEffect"><img src={jquery} alt="" id='query' className="img-width h-100"/></h1>
                  <h3 className="card-text text-center secondfontColor">jQuery</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4' data-aos="flip-left" data-aos-delay="600">
              <div className={`card cardbg border-0  w-100 ${skillStyle.skillCradHover} rounded-4 overflow-hidden ${skillStyle.cardHeight}`}> 
                <div className={`card-body h-100 mt-4 ${skillStyle.skillBodyHover}`}>
                  <h1 className="card-title text-center fontEffect display-4"><i className="fa-brands fa-react"></i></h1>
                  <h3 className="card-text text-center secondfontColor">React</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4' data-aos="flip-left" data-aos-delay="600">
              <div className={`card cardbg border-0  w-100 ${skillStyle.skillCradHover} rounded-4 overflow-hidden ${skillStyle.cardHeight}`}> 
                <div className={`card-body h-100 mt-4 ${skillStyle.skillBodyHover}`}>
                  <h1 className="card-title text-center fontEffect"><img src={tailwindcss} alt="tailwindcss.icon" id='tailwindcss' /></h1>
                  <h3 className="card-text text-center secondfontColor ">Tailwindcss</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4' data-aos="flip-left" data-aos-delay="600">
              <div className={`card cardbg border-0  w-100 ${skillStyle.skillCradHover} rounded-4 overflow-hidden ${skillStyle.cardHeight}`}> 
                <div className={`card-body h-100 mt-4 ${skillStyle.skillBodyHover}`}>
                  <h1 className="card-title text-center fontEffect"><img src={typescript} alt="typescript.icon" id='typescript'/></h1>
                  <h3 className="card-text text-center secondfontColor  ">Typescript</h3>
                </div>
              </div>
            </div>

          </div>
      </div>
      
    </Element>
  )
}
