import { Element } from 'react-scroll';

export default function Contact() {


  return (
    <Element name="Contact" className=" py-5 h-100 secondBgcolor">
      <div className="container h-100">
        <div className="contactheader" data-aos="zoom-in" data-aos-delay="500">
        <h1 className="fontColor fontFamilybody py-3 text-center">Let's Work <span className="fontEffect">Together</span></h1>
        <hr className="fontEffect w-25 w-md-50 m-auto pb-4"/>
        </div>
      
        <form className="row g-3"  action="https://getform.io/f/bejlmloa" method="POST" data-aos="fade-up" data-aos-delay="500">
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label fontColor fontFamilybody"  >Name</label>
            <input type="Name" className="form-control" id="inputName" name="name" required/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label fontColor fontFamilybody" >Email</label>
            <input type="email" className="form-control" id="inputEmail4" name="email" required/>
          </div>

          <div className="col-md-12">
            <label htmlFor="exampleFormControlTextarea1" className="form-label fontColor fontFamilybody" >Your Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>

          <div className="col-12 pt-2">
            <button type="submit" className="btn buttonLight py-2 px-4">Send Message</button>
          </div>

        </form>
      </div>
    </Element>
  )
}
