import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/PNG.png'
import Header_socials from './Header_socials'

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello i'm</h5>
        <h1>Ikechi Marvel</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <Header_socials/>

        <div className="me">
          <img src={ME} alt="me" /> 
        </div>

        <a href="#Contact" className="scroll__down" >Scroll--down</a>
      
      </div>
    </header>
  )
}

export default Header