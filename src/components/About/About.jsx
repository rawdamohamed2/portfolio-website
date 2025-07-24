import AboutStyle from './About.module.css'
import profile from '../../assets/images/profile.jpg'
import { Element } from 'react-scroll';

export default function About() {

  return (
    <Element name="AboutMe" className="height py-5 h-100 secondBgcolor" >
        <div className="container h-100">
            <div className="row g-5 mt-md-1 mt-sm-0 py-md-0 py-sm-1 align-items-center" >

                <div className="col-md-12 col-lg-8 py-md-0 mt-md-0 mt-sm-2 ps-md-5 ps-sm-0" >        
                    <div className="AboutMeContant"data-aos="fade-up" data-aos-delay="500">
                        <div className="headerContant text-center py-4" >
                            <h1 className="display-5 fw-medium fontdisplay">About <span className="fontEffect">Me</span></h1>
                            <hr className="fontEffect w-25 w-md-50 m-auto mt-3"/>
                        </div>
                        <div className="content" >
                            <p className="fs-5 fontdisplay">I'm Rawda Mohamed, a Frontend Developer and a fourth-year Computer Science student. 
                                I specialize in building clean, responsive, and user-friendly websites using HTML, CSS, Bootstrap, JavaScript, and jQuery.
                                I enjoy transforming ideas into interactive web experiences and constantly strive to improve my skills and learn new technologies.
                            </p>
                            <p className=" fs-5 fontdisplay">My goal is to blend creativity with cutting-edge technology, delivering web applications that leave a lasting impression.</p>
                            <hr className="text-light-emphasis py-md-2"/> 
                            <div className="row g-0">
                                <div className="col-md-12 col-lg-6">
                                    <ul className="list-group  border-0">
                                        <li className="list-group-item border-0 bg-transparent fontColor fontdisplay">Name: <span className="secondfontColor">Rawda Mohamed</span></li>
                                        <li className="list-group-item border-0 bg-transparent fontColor fontdisplay">Age: <span className="secondfontColor">21 Year</span></li>
                                        <li className="list-group-item border-0 bg-transparent fontColor fontdisplay">Email: <span className="secondfontColor">rawda.singab1@gmail.com</span></li>
                                    </ul>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <ul className="list-group  border-0">
                                        <li className="list-group-item border-0 bg-transparent fontColor fontdisplay">Job Title: <span className="secondfontColor">Frontend Developer</span></li>
                                        <li className="list-group-item border-0 bg-transparent fontColor fontdisplay">Location: <span className="secondfontColor">Alex, Eygpt</span></li>       
                                    </ul>
                                </div>
                                <div className="col-md-12 py-3 px-2 fontdisplay ">
                                    <a href="https://www.linkedin.com/in/rawda-mohamed-367a77370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn buttonLight text-decoration-none mt-md-0 mt-2 "> My Linkedin</a>
                                    <a href="https://drive.google.com/file/d/1rpknOGf54qGh00DDHq0jsPPnftMhxnPa/view?usp=drive_link" className="btn buttonLight text-decoration-none ms-2 mt-md-0 mt-2"> My Cv </a>
                                </div>         
                            </div> 

                        </div>
                    </div>
                </div>

                <div className={`col-md-12 col-lg-4 pt-md-2 pt-md-0 pb-sm-5 pb-md-1 ${AboutStyle.colpos}`} data-aos="fade-down" data-aos-delay="500">
                    <div className="positi h-100 position-relative w-100">
                        <div className={`${AboutStyle.imageDiv1} position-absolute h-75 w-100`}>
                        </div>
                        <div className={`${AboutStyle.imageDiv2} position-absolute h-75 w-100`}>
                            <img src= {profile} alt="My-Photo" className="w-100 h-100"/>
                        </div>
                    </div>
                </div>
                        
            </div>
      </div>
    </Element>
  )
}
