import React from 'react'
import './Contact.css'
import x from '../../assets/twitter.png'
import git from '../../assets/github.png'
import gmail from '../../assets/gmail.png'  
import insta from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

const Contact = () => {
  return (
    <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form action="" className="contactForm">
              <input type="text" className="name" placeholder='Your Name' />
              <input type="email" className="email" placeholder='Your Email' required/>
              <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value="send" className="submitBtn">Submit</button>

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
