import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icons } from './Icons'
import myPicture from '../Pictures/myPicture.jpg';
import backgroundPic from '../Pictures/backgroundPic.PNG';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="headerTitle">
        <h1>Portfolio:</h1>
        <h1>Kaja Wilbik</h1>
        <h2>Front-end developer</h2>
      </div><img src={myPicture} alt="Kajas profile" />
      <Icons size="40px" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
 background-image: url(${backgroundPic});
 background-size: cover; // make a background picture cover the whole page
 display: flex;
    height: 520px;
    width: 100vw;
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
    top: 420px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border:solid cadetblue;
}

.headerTitle {
    padding:10px;
    font-size: 20px;
}

.headerTitle h2 {
    color:black;
}

@media screen and (min-width: 1024px) {
    .myPicture {
    top: 350px;
    right: 50px;
    position: absolute;
    width: 270px;
    height: 270px;
   } 

   .headerTitle{
    font-size: xx-large;
    text-align: center;
   }
}
 `
