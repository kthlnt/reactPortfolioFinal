import React from 'react'
import './contact.css';
import {IoIosMail} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_sbkynmd', 'template_19735w9', form.current, 'FJwWeEoor7B4DIJhP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        e.target.reset();
    };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <article className="contact__option">
          <IoIosMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>kathlantto@gmail.com</h5>
          <a href="mailto:kathlantto@gmail.com" target="_blank">Send a message</a>
        </article>

        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="messgae" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' class='btn btn primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact