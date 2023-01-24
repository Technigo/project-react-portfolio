import React, { useRef, useState } from 'react';
import './contact.css';
// import styled from 'styled-components'
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_df8z6dd',
        'template_aj2ys7k',
        form.current,
        'O_yTxsK_MvTo8Qoh2'
      )
      .then(
        (result) => {
          setMessage('Thank you, message sent!');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact__options p-9">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <a
              href="mailto:so.mariagloria@gmail.com"
              target="_blank"
              rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=358408323607"
              target="_blank"
              rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <a
              href="https://m.me/mariamustonenso"
              target="_blank"
              rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <div className="message">{message}</div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
