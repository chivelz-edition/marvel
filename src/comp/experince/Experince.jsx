import React from "react";
import './experince.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experince = () => {
  return(
  <section id='Experince'>
    <h5>What Skills i have</h5>
      <h2>My Exeperince</h2>
      
      <div className="container experince__container">
        <div className="experince__frontend">
          <h3>Frontend Development</h3>
          <div className="experince-content">
            
            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experince</small>
            </article>

            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Experince</small>
            </article>

            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>Angular</h4>
              <small className='text-light'>Experince</small>
            </article>

            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>React js</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>TailWindCss</h4>
              <small className='text-light'>Basic</small>
            </article>
          </div>

        </div>

        <div className="backend">
          <h3>Backend Development</h3>
           <div className="experince-content">
           <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>Express js</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>Node js</h4>
              <small className='text-light'>Basic</small>
            </article>
            
            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>MongoDB</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className="experince-details">
              <BsPatchCheckFill className=' experince-details-icon'/>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
            </article>
          </div>
        </div>

        </div>
    </section>
  )
};

export default Experince;
