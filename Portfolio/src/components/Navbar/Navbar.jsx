import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg' 
import contacting from '../../assets/contacting.png'
import {Link} from 'react-router-dom';

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
                <Link className='menuListItem'>Home</Link>
                <Link className='menuListItem'>About</Link>
                <Link className='menuListItem'>Skills</Link>
                <Link className='menuListItem'>Projects</Link>      
            
        </div>

        <button className='menubtn'>
           <img src={contacting} alt='contact' className='btnimg'/>Contact Me !
        </button>
    </nav>
  )
}

export default Navbar
