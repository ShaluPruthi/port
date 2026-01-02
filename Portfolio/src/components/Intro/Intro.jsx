import React from 'react'
import './Intro.css'
import profile from '../../assets/profile.jpeg'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="home" className="intro">
      <div className="introContent">
        <span className="hello">Hello 👋</span>

        <h1 className="introTitle">
          I'm <span className="highlight">Shalu Pruthi</span>
        </h1>

        <h2 className="introRole">
          Full Stack Web Developer
        </h2>

        <p className="introDesc">
          I design and build responsive, scalable and user-friendly web applications.
          Passionate about creating clean UI, powerful backend systems and real-world solutions using modern web technologies.
        </p>

        <a
          href="/Shalu_WebDeveloper.pdf"
          download="Shalu_Pruthi_Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </a>
      </div>

      <div className="introImage">
        <img src={profile} alt="Shalu Pruthi" />
      </div>
    </section>
  )
}

export default Intro
