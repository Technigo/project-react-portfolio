import React from 'react';
import styled from 'styled-components';

const SocMedLinks = ({ linkedin, github, stackoverflow }) => {
  return (
    <NavBar>
      <a href="https://www.linkedin.com/in/thérèse-ånmark/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="linkedIn icon" />
      </a>
      <a href="https://github.com/Tanmark" target="_blank" rel="noreferrer">
        <img src={github} alt="github icon" />
      </a>
      <a href="https://stackoverflow.com/users/14751780/tanmark" target="_blank" rel="noreferrer">
        <img src={stackoverflow} alt="stackoverflow" />
      </a>
    </NavBar>
  )
}

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;

`

export default SocMedLinks;
