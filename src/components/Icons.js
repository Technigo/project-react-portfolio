import React from 'react';
import styled from 'styled-components';
import { RiLinkedinFill } from '@react-icons/all-files/ri/RiLinkedinFill';
import { BsGithub, BsStackOverflow } from 'react-icons/bs';

export const Icons = (size) => {
  return (
    <IconsHeader size={size} className="icons_header">
      <a
        href="https://www.linkedin.com/in/kaja-wilbik/"
        target="_blank"
        rel="noreferrer">
        <RiLinkedinFill />
      </a>
      <a
        href="https://github.com/KajaWilbik?tab=repositories"
        target="_blank"
        rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://stackoverflow.com/c/technigo/users/363"
        target="_blank"
        rel="noreferrer">
        <BsStackOverflow />
      </a>
    </IconsHeader>

  )
}

const IconsHeader = styled.i`
 position: absolute;
    font-size: 2rem;
    top: 30px;
    right: 30px;
    padding:3px;
    

 a {
    display: flex;
    text-decoration: none;
    border: solid #3b362ad6;
    color: black;
    color: 3b362ad6;
    border-radius: 40%;
    padding: 10px;
    margin: 5px;
}

a:hover {
  color:violet;
}
.icons {
 font-size:${(props) => props.size}; // using props aloud me to change a size of icon, remember to add the proper size when I mount a comp example size=""
    display: flex;
    justify-content: space-evenly;
}

.icons a {
    border:#779a96;
}
   
   @media screen and (min-width: 1024px) {
   display: flex;
    flex-direction: row;
    font-size:45px;

 a {
    margin-left:15px;
   }
i {
    font-size: 60px;
   }
}
   
   `
