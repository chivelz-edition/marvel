import React from "react";
import './header.css'
import PNG from '../../assets/PNG.png'
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return(
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ikechi Marvel</h1>
        <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials/>
      <div className="me">
        <img src={PNG} alt="my photo" />
      <a href="#contact" className='Scroll__down'>Scroll Down</a>
      </div>
      </div>
  
    </header>
  )
}

export default Header;
