import React, { useState, useEffect } from 'react';
import './Navbar2.css';
import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.sidebar') && !e.target.closest('.hamburger')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navLogo">
        <img src={logo} alt="Logo" />
        <h3>SupaNote</h3>
      </div>

      {/* Desktop Links */}
      <div className="navLinks">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Testimonials</a>
        <a href="#">Pricing</a>
        <a href="#">FAQs</a>
      </div>

      {/* Desktop Buttons */}
      <div className="navBtn">
        {/* <button className="navBtnBtn">Log In</button> */}
        <Button width="150px" height="38px" title="Log In" />
      </div>

      {/* Hamburger (mobile only) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebarHeader">
          <img src={logo} alt="Logo" />
          <h3>SupaNote</h3>
        </div>

        <div className="sidebarLinks">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Testimonials</a>
          <a href="#">Pricing</a>
          <a href="#">FAQs</a>
        </div>

        <div className="sidebarBtn">
          <button className="navBtnBtn">Log In</button>
          <Button width="150px" height="38px" title="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;



// import React from 'react'
// import './Navbar.css'
// import logo from '../../assets/images/logo.png'
// import Button from '../Button/Button'

// const Navbar = () => {
//   return (
//     <div className='navbar'>

//         <div className='navLogo'>
//             <img src={logo} alt="" />
//             <h3>SupaNote</h3>
//         </div>
            

//         <div className='navLinks'>
//             <a href="">Home</a>
//             <a href="">Features</a>
//             <a href="">Testimonials</a>
//             <a href="">Pricing</a>
//             <a href="">FAQs</a>
//         </div>

//         <div className='navBtn'>
            
//             <button className='navBtnBtn'>Log In</button>
//             <Button width="150px" height="38px" title="Sign Up"/>
//         </div>

//     </div>
//   )
// }

// export default Navbar