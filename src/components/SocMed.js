import React from 'react';
import { NavBar } from '../styles/GlobalStyles';

const SocMedLinks = ({ linkedin, github, stackoverflow }) => {
  return (
    <NavBar className="ms-auto">
      <a href="https://www.linkedin.com/in/thérèse-ånmark/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="linkedIn" />
      </a>
      <a href="https://github.com/Tanmark" target="_blank" rel="noreferrer">
        <img src={github} alt="github" />
      </a>
      <a href="https://stackoverflow.com/users/14751780/tanmark" target="_blank" rel="noreferrer">
        <img src={stackoverflow} alt="stackoverflow" />
      </a>

    </NavBar>
  )
}
export default SocMedLinks