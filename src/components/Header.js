import React from 'react';
import CTA from './CTA';
import me from '../Assets/me.png';
import './header.css';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Maria So</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" className="rounded-full" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
