import React from "react";
import './portfolio.css'
import img1 from '../../assets/AUTO.jpg'
import img2 from '../../assets/AVATER.png'
import img3 from '../../assets/AVATER1.jpg'
import img4 from '../../assets/AVATER3.jpg'
import img5 from '../../assets/IMG10.png'
import img6 from '../../assets/BAS.jpg'

const data = [
  {
    id: 1,
    Image: img1,
    title: 'Crypto Currency & finicial visualization',
    github: "https://github.com",
    demo: 'https://dribbble.com'
  },
  
  {
    id: 2,
    Image: img2,
    title: 'Chart tempelate dashbord & and ifographics in figma',
    github: "https://github.com",
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    Image: img3,
    title: 'Figma dashbord UI kit for data designs web app',
    github: "https://github.com",
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    Image: img4,
    title: 'Maintaining task and tracking progress',
    github: "https://github.com",
    demo: 'https://dribbble.com'
  },
  {
    id: 5,
    Image: img5,
    title: 'Chart tempelate dashbord & and ifographics in figma',
    github: "https://github.com",
    demo: 'https://dribbble.com'
  },
  {
    id: 6,
    Image: img6,
    title: 'Database management and administration',
    github: "https://github.com",
    demo: 'https://dribbble.com'
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, Image, title, github, demo }) => {
            return (
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
                  <img src={ Image } alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} target="_blank" className=' btn'>Github</a>
              <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
};
export default Portfolio;


