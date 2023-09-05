import React from "react";
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoInstagram} from 'react-icons/io'
import {TiSocialTwitter} from 'react-icons/ti'
import {FaPinterest} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Marvel</a>
      <ul className="personal_links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experince">Experince</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com"> <FaFacebookF/></a>
        <a href="http://instagram.com"><IoLogoInstagram/></a>
        <a href="http://twitter.com"><TiSocialTwitter/></a>
        <a href="http://pinterest.com"><FaPinterest/></a>
      </div>

      <div className="footer__copyright">
          <small>&copy; CHIVELZ edition. All rights reserved</small>
      </div>

    </footer>
  )
};

export default Footer;
