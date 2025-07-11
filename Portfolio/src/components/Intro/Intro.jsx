import React from 'react'
import './Intro.css'
import profile from '../../assets/profile.jpeg'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-router-dom';

const color = {
  color: '#f0c14b',
  fontWeight: 'bold'
}

const Intro = () => {
  return (
    <section id="home">
        <div className="introContent">
            <span className="hello">
            Hello,
            </span>
            <span>I'm <span style={color}>Shalu</span><br/>
            Full Stack Web Developer</span>
            <p className="para">I am a passionate full-stack web developer with strong expertise in web development.</p>

            <a href='/Shalu_WebDeveloper.pdf' download="Shalu_Pruthi_Resume" target='_blank' rel='noopener noreferrer'>
            <button className='btn'> <img src={btnImg} alt="" className='btnImg'/>
            Hire Me!
            </button>
            </a>
        </div>
        
        <img src={profile} alt="" className='bg'/>
    </section>
  )
}

export default Intro
