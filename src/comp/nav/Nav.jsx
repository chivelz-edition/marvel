import React from "react";
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser} from 'react-icons/ai'
import { FaBookOpen } from 'react-icons/fa'
import { FaHeadset } from 'react-icons/fa'
import { FaRegCommentDots } from 'react-icons/fa'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#Experince" onClick={() => setActiveNav('#Experince')} className={activeNav === '#Experince' ? 'active' : ''}><FaBookOpen/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaHeadset/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FaRegCommentDots/></a>
    </nav>
  );
};

export default Nav;
