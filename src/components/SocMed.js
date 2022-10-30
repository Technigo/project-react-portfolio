import React from 'react';
import styled from 'styled-components/macro';

const SocMedLinks = ({ linkedin, github, stackoverflow }) => {
  return (
    <NavBar className="SocMedLinks">
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

export const NavBar = styled.div`
    position: absolute;
    right: 1%;
    top: 5%;
    
`;

export default SocMedLinks