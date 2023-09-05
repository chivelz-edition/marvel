import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="httpa://linkedin.com" traget="_blank"><BsLinkedin/></a>
      <a href="httpa://github.com" traget="_blank" ><FaGithub/></a>
      <a href="httpa://dribbble.com" traget="_blank"> <FiDribbble/></a>
      </div>
  )
};

export default HeaderSocials;
