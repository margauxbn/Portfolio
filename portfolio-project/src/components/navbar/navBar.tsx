import React, { useState, useEffect } from 'react';
import './navBar.css';
import logoNavBar from '../../assets/logo/logo-navbar.webp';

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); 

  return (
    <div className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className='logo-navbar'>
        <img src={logoNavBar} alt='Logo où il est écrit MB' className='img-logo-navbar'/>
      </div>
      <div>
        <ul className='list-navbar'>
          <li className='element-list-navbar'>présentation</li>
          <li className='element-list-navbar element-projets-list-navbar'>projets</li>
        </ul>
      </div>            
    </div>
  );
}

export default NavBar;
