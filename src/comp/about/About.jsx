import React from "react";
import './about.css'
import ME from '../../assets/ME.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserAstronaut} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about_me">
        <div className="about__me-img">
          <img src={ME} alt="my photo" />
        </div>
      </div>
    


    <div className="about__content">
      <div className="about__cards">

        <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Exprince</h5>
          <small>8+ Months Experince</small>
        </article>

        <article className="about__card">
          <FaUserAstronaut className='about__icon'/>
          <h5>Clients</h5>
          <small>2+ Nation Wide</small>
        </article>

        <article className="about__card">
          <FaFolderOpen className='about__icon'/>
          <h5>Proects</h5>
          <small>10+ projects Completed</small>
        </article>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quam repellat magnam quae autem perspiciatis adipisci, repellendus voluptatibus odit unde accusantium exercitationem aspernatur repudiandae nam, praesentium officia iusto debitis suscipit ullam, maxime ipsa cupiditate laudantium?</p>

      <a href="#contact" className='btn btn-primary'>let's talk</a>

    </div>
  </div>
  </section>;
};

export default About;
