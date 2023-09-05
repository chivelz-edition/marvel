import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/AUTO.jpg'
import IMG2 from '../../assets/IMG10.png'
import IMG3 from '../../assets/img111.png'
import IMG4 from '../../assets/img8.jpg'
import IMG5 from '../../assets/img12.jpg'
import IMG6 from '../../assets/img9.jpg'
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_img">
          <img src={IMG1} alt="image" />
           </div>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/allen_pixel.com/" className='btn btn-primary' target='_blank'>live Demo</a>
         
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
          <img src={IMG2} alt="image" />
           </div>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/allen_pixel.com/" className='btn btn-primary' target='_blank'>live Demo</a>
         
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
          <img src={IMG3} alt="image" />
           </div>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/allen_pixel.com/" className='btn btn-primary' target='_blank'>live Demo</a>
         
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
          <img src={IMG4} alt="image" />
           </div>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/allen_pixel.com/" className='btn btn-primary' target='_blank'>live Demo</a>
         
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
          <img src={IMG5} alt="image" />
           </div>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/allen_pixel.com/" className='btn btn-primary' target='_blank'>live Demo</a>
         
            </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
          <img src={IMG6} alt="image" />
           </div>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/allen_pixel.com/" className='btn btn-primary' target='_blank'>live Demo</a>
         
            </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio