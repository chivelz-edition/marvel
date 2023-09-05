import React from 'react'
import './experince.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experince() {
  return (
    <section id="experince">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experince_container">
        <div className="experince_frontend">
          <h3>FrontEnd Development</h3>
          <div className="exeperince_content">
          <article className="exeperince_details">
            <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="exeperince_details">
            <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>CSS</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="exeperince_details">
            <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="exeperince_details">
            <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>Bootstramp</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="exeperince_details">
            <BsPatchCheckFill className="experince_details-icons" />
           <div> <h4>Python</h4>
            <small className="text-light">Experienced</small></div>
          </article>
          <article className="exeperince_details">
            <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>React</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          
        </div>  
      </div>
          

        <div className="experince_backend">
          <h3>Backend Development</h3>
          <div className="exeperince_content">
            <article className="exeperince_details">
              <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>Node Js</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exeperince_details">
              <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>PHP</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="exeperince_details">
              <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>Django</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="exeperince_details">
              <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exeperince_details">
              <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exeperince_details">
              <BsPatchCheckFill className="experince_details-icons" />
              <div>
                <h4>Python</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>  
        </div>  
      </div> 
    </section>
    
  )
}

export default Experince