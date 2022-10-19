import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/hero.jpg';
import profileImage from '../images/portrait.jpg';

const Header = () => {
  return (
    <HeaderStyler>
      <article>
        <h1>Portfolio: <span>Petra  <br />Söderström</span></h1>
        <h2>frontend <br />developer</h2>
      </article>
      <div>
        <img
          src={profileImage}
          alt="profile-of-Petras" />
        {/*         <h7><span>Petra  <br />Söderström</span></h7> */}
      </div>
    </HeaderStyler>
  )
}

export default Header;

const HeaderStyler = styled.head`
/* BACKGROUND PICTURE */
background: linear-gradient(rgba(82, 81, 81, 0.5), rgba(0, 0, 0, 0.062)),
url(${heroImage});
background-size: cover;
background-repeat: no-repeat;
width: 100vw;
height: 50vh;
position: relative;
display: flex;

img {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  height: auto;
  width: 40vw;
  right: 10vw;
  top: 35vh;
}

article {
  position: absolute;  
  top 15vh;
  left: 5vw;
}

/* @media (min-width: 668px) {
} */

@media (min-width: 1024px) {
  img {
    width: 15vw;
    right: 20vw;
  }
  img:hover {
      filter: brightness(75%);
      opacity: 1;
  }
}
`
