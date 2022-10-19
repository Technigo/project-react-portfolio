import React from 'react';
import styled from 'styled-components';
import linkedinLogo from '../images/linkedin-logo.svg';
import githubLogo from '../images/github-logo.svg';
import stackoverflowLogo from '../images/stackoverflow-logo.svg';

const Navbar = () => {
  return (
    <NavbarStyler>
      <a href="https://www.linkedin.com/in/petra-soderstrom">
        <img
          aria-label="visit my linked in"
          src={linkedinLogo}
          alt="linked-in-icon" />
      </a>
      <a href="https://github.com/Petrasoderstrom1612">
        <img
          aria-label="visit my github"
          src={githubLogo}
          alt="github-icon" />
      </a>
      <a href="https://stackoverflow.com/users/19418321/petra-s">
        <img
          aria-label="visit my stackoverflow page"
          src={stackoverflowLogo}
          alt="stackowerflow-icon" />
      </a>
    </NavbarStyler>
  )
}

export default Navbar;

const NavbarStyler = styled.header`
position: absolute;
z-index: 1;
top: 5vh;
right: 10vw;

img {
width: 11vw;    
}

@media (min-width: 668px) {
top: 5vh;
right: 12vw;
}

@media (min-width: 1024px) {
top: 10vh;
right: 20vw;    

img {
width: 5vw;    
}

img:hover {
opacity: 85%;
background-color:  rgb(255, 119, 119);
border-radius: 50%;
}

}
`