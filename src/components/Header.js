import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icons } from './Icons'
import myPicture from '../Pictures/myPicture.jpg';
// import backgroundPic from '../Pictures/backgroundPic.PNG';
import BackgroundPix2 from '../Pictures/BackgroundPix2.png'
import Trianglify from '../Pictures/Trianglify.svg'

export const Header = () => {
  return (
    <StyledHeader>
      <div className="headerTitle">
        <h1>Portfolio: Kaja Wilbik</h1>
        {/* <h1>Kaja Wilbik</h1> */}
        <h2>Frontend developer</h2>
      </div><img src={myPicture} alt="Kajas profile" />
      <Icons size="40px" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
 background-image: url(${Trianglify});
 background-size: cover; // make a background picture cover the whole page
 border-bottom:  5px solid  black;
 display: flex;
    height: 40vh;
    left: 0px;
    top: 0px;
    background-repeat: no-repeat;
    color: #3b362a;
    justify-content: center;
    flex-direction: column;
img {
    display: flex;
    justify-items: flex-end;
    position: absolute;
    right: 24px;
    top: 230px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border:solid black;
}

.headerTitle h1 {
    font-size: 1rem;
    color: black
}

.headerTitle h2 {
    color:black;
    font-size: 1.5rem;
}



@media screen and (min-width: 1024px) {
    img {
    top: 200px;
    right: 50px;
    position: absolute;
    width: 200px;
    height: 200px;
   } 

   .headerTitle {
    margin-left: 20px;
    margin-top: 70px;
    /* font-size: xx-large; */
   }

   h1 {
    font-size: 2rem;
   }

   h2 {
    font-size: 4rem
   }

}
 `
