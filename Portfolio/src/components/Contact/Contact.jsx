import React,{useRef} from 'react'
import './Contact.css'
import x from '../../assets/twitter.png'
import git from '../../assets/github.png'
import gmail from '../../assets/gmail.png'  
import insta from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

emailjs.init('IuK1Mpkt-0KQ_TRwQ');

const Contact = () => {
  const form= useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      emailjs.sendForm(
      import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
)

      .then(
        (result) => {
          console.log('SUCCESS!');
          alert('Message sent successfully!,', result.text);
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert(`Failed to send message: ${error.text || error}`);
        },
      );
  };

  return (
    <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder='Your Name' name='from_name'/>
              <input type="email" className="email" placeholder='Your Email' name='from_email' required/>
              <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
              <button type='submit' className="submitBtn">Submit</button>

              <div className="links">
                <img src={x} alt="X" className="link" />
                <img src={git} alt="github" className="link" />
                <img src={insta} alt="instagram" className="link" />
                <img src={linkedin} alt="linkedin" className="link" />
                <img src={gmail} alt="gmail" className="link" />
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
