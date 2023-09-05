import React from 'react'
import './testimonials.css'
import AVATER1 from '../../assets/AVATER1.jpg'
import AVATER2 from '../../assets/Screenshot_20230317-090201.jpg'
import AVATER3 from '../../assets/Screenshot_20230417-092157.jpg'
import AVATER4 from '../../assets/blackph.jpg'

// import Swiper core and required modules
// import {Pagination} from 'swiper';
// import { Swiper, SwiperSlide } from 'Swiper/react';
// import 'swiper/css'
// import 'swiper/css/pagination';

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Reviewe From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonial_container">
        <article className="testimonial">
          <div className="client_avater">
            <img src={AVATER1} alt="client pictuer" />
          </div>
          <h5 className='client_name'>Cyrily cy</h5>
            <small className="clients_review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam aspernatur voluptas iusto eligendi facilis inventore rem velit magni voluptatum quas ea laudantium consectetur qui minima, sequi iure. Veritatis, culpa?</small>
        </article>
        
        <article className="testimonial">
          <div className="client_avater">
            <img src={AVATER2} alt="client pictuer" />
          </div>
          <h5 className='client_name'>Kendra well's</h5>
            <small className="clients_review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam aspernatur voluptas iusto eligendi facilis inventore rem velit magni voluptatum quas ea laudantium consectetur qui minima, sequi iure. Veritatis, culpa?</small>
        </article>
        
        <article className="testimonial">
          <div className="client_avater">
            <img src={AVATER3} alt="client pictuer" />
          </div>
          <h5 className='client_name'>Anabel chukky</h5>
            <small className="clients_review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam aspernatur voluptas iusto eligendi facilis inventore rem velit magni voluptatum quas ea laudantium consectetur qui minima, sequi iure. Veritatis, culpa?</small>
        </article>
        
        <article className="testimonial">
          <div className="client_avater">
            <img src={AVATER4} alt="client pictuer" />
          </div>
          <h5 className='client_name'>Danny snow</h5>
            <small className="clients_review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam aspernatur voluptas iusto eligendi facilis inventore rem velit magni voluptatum quas ea laudantium consectetur qui minima, sequi iure. Veritatis, culpa?</small>
        </article>
        
        
      </div>
    </section>
  )
}

export default Testimonials