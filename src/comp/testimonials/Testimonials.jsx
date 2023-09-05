import React from "react";
import './testimonials.css'
import  AVA1  from '../../assets/ana.jpg'
import  AVA2  from '../../assets/sof.jpg'
import  AVA3  from '../../assets/web dev.jpg'
import AVA4 from '../../assets/BAS.jpg'
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avater: AVA1,
    name: 'Anabel Ogun',
    review: 'lorem consectetur adipisicing elit. Molestiae laboriosam mollitia facere necessitatibus quod reprehenderit doloremque a harum, commodi eum aliquam dolorem itaque aliquid quasi numquam repellendus eos aspernatur, iste dolor impedit? Aspernatur quisquam fugit nam repellendus quas, obcaecati distinctio.'
  },
  {
    avater: AVA2,
    name: 'jassy Sofia ',
    review: 'lorem consectetur adipisicing elit. Molestiae laboriosam mollitia facere necessitatibus quod reprehenderit doloremque a harum, commodi eum aliquam dolorem itaque aliquid quasi numquam repellendus eos aspernatur, iste dolor impedit? Aspernatur quisquam fugit nam repellendus quas, obcaecati distinctio.'
  },
  {
    avater: AVA3,
    name: 'Elendor Daisy',
    review: 'lorem consectetur adipisicing elit. Molestiae laboriosam mollitia facere necessitatibus quod reprehenderit doloremque a harum, commodi eum aliquam dolorem itaque aliquid quasi numquam repellendus eos aspernatur, iste dolor impedit? Aspernatur quisquam fugit nam repellendus quas, obcaecati distinctio.'
  },
  {
    avater: AVA4,
    name: 'Mary Jane',
    review: 'lorem consectetur adipisicing elit. Molestiae laboriosam mollitia facere necessitatibus quod reprehenderit doloremque a harum, commodi eum aliquam dolorem itaque aliquid quasi numquam repellendus eos aspernatur, iste dolor impedit? Aspernatur quisquam fugit nam repellendus quas, obcaecati distinctio.'
  },
]
{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam mollitia facere necessitatibus quod reprehenderit doloremque a harum, commodi eum aliquam dolorem itaque aliquid quasi numquam repellendus eos aspernatur, iste dolor impedit? Aspernatur quisquam fugit nam repellendus quas, obcaecati distinctio.</p>

 */}


const Testimonials = () => {
  return <section id='testimonials'>
    <h5>Rview from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
      modules={ [ Navigation, Pagination, Scrollbar,  ] }
      spaceBetween={ 540 }
      slideperView={ 1 }
      pagination={{ clickable: true}}
    >

      {
        data.map(({ avater, name, review, }, index) => {
          return (
            <SwiperSlide key={ index } className="testimonial">
              <div className="clients__avater">
                <img src={ avater } />
              </div>
              <h5>{ name }</h5>
              <small className="cr">{ review }</small>
            </SwiperSlide>
          )
        })
      }

    </Swiper>
  </section>;
};

export default Testimonials; 
