import React from "react";
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendform('service_d8yml6m', 'template_sdqveqh', form.current, 'YOUR_USER_ID')
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineMarkEmailRead className="contact__option__icon"/>
            <h4>E-Mail</h4>
            <h5>marvel4real2008@gmail.com</h5>
              <a href="mailto:marvel4real2008@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option__icon"/>
            <h4>Messenger</h4>
            <h5>marvel4real2008@gmail.com</h5>
              <a href="https://m.me/profile.php?id=100090590860482" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon"/>
            <h4>Whatsapp</h4>
            <h5>marvel4real2008@gmail.com</h5>
             <a href="https://api.whatsapp.com/send?phone+234813217999" target="_blank">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Enter your mwssage" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
       </form>
      </div>
    </section>
  )
};

export default Contact;
