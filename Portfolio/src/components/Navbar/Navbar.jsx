import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg' 
import contacting from '../../assets/contacting.png'
import {Link} from 'react-scroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <img src={logo} alt="logo" className='logo' />
        <div className="menu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='menuListItem'>Home</Link>
                <Link activeClass="active" to="head" spy={true} smooth={true} offset={-50} duration={500} className='menuListItem'>About</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className='menuListItem'>Skills</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className='menuListItem'>Projects</Link>      
            
        </div>

        <button className='menubtn' onClick={()=>
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }
  )}>
           <img src={contacting} alt='contact' className='btnimg'/>Contact Me !
        </button>
    </nav>
  )
}

export default Navbar
