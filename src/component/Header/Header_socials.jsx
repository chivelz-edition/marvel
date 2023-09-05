import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiGithub} from 'react-icons/si'
import {FiDribbble} from 'react-icons/fi'


function Header_socials() {
  return (
    <div className="header_socials">
      <a href="http://linkedin.com" target="blank"> <BsLinkedin/></a>
      <a href="http://github.com" target="blank"> <SiGithub/></a>
      <a href="http://dribble.com" target="blank"><FiDribbble/></a>
    </div>
  )   
    
}

export default Header_socials