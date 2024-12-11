import React, { useState, useEffect } from 'react';
import './navBar.css';
import logoNavBar from '../../assets/logo/logo-mb.png';

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY); 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); 

  return (
    <div className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className='logo-navbar' onClick={scrollToTop}>
        <img src={logoNavBar} alt='Logo où il est écrit MB' className='img-logo-navbar'/>
      </div>
      <div>
        <ul className='list-navbar'>
          <li>
            <a className="element-list-navbar" href="#presentation">présentation</a>
          </li>
          <li className='element-projets-list-navbar'>
            <a className="element-list-navbar" href="#projects">projets</a>
          </li>
        </ul>
      </div>            
    </div>
  );
}

export default NavBar;
