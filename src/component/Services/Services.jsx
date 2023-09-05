import React from 'react'
import './services.css'
import { BiCheckDouble} from 'react-icons/bi'

function Services() {
  return (
    <section id="services">
      <h5>what i offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
          {/* END of ui/ux */}
          
          </ul>
        </article>


        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
          {/* END OF WEB DEVELOPMENT */}
          
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>content creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </li>
          {/* END OF CONTENT CREATION */}
          
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services