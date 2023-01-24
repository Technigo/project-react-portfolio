/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './footer.css';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Whatever you do, do well. Ecclesiastes 9:10-12
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portolio">Porfolio</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/bibiruu" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/maria-so-bbb471215/"
          target="_blank"
          rel="noreferrer">
          <BsLinkedin />
        </a>
        <a
          href="https://www.facebook.com/SoMustonen"
          target="_blank"
          rel="noreferrer">
          <BsFacebook />
        </a>
      </div>

      <div className=".footer__copyright">
        <small>&copy; Maria So 2022. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
