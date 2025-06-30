import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import contactImg from '../../assets/contacting.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [active, setActive] = useState('intro');
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSetActive = (to) => {
    setActive(to);
    setShowMenu(false); // Close menu on link click (mobile UX)
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`menu ${showMenu ? 'show' : ''}`}>
        {['home', 'about', 'skills', 'projects'].map((section) => (
          <Link
            key={section}
            activeClass="active"
            to={section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={`menuListItem ${active === section ? 'active' : ''}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          onSetActive={() => handleSetActive('contact')}
        >
          <button className="menubtn">
            <img src={contactImg} alt="contact" className="btnimg" />
            Contact Me
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
