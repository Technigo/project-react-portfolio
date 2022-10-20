import React from 'react';
import GitHUbIcon from 'icons/github.svg'
import LinkedInIcon from 'icons/linkedin.svg'
import StackIcon from 'icons/stack.svg';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyling>
      <header className="section header">
        <div className="social-media-links">
          <div className="logo">
            <a
              href="https://www.linkedin.com/in/miadahlgren/"
              target="_blank"
              rel="noreferrer">
              <img alt="LinkedIn" src={LinkedInIcon} />
            </a>
          </div>
          <div className="logo">
            <a href="https://github.com/miadahlgren" target="_blank" rel="noreferrer">
              <img alt="Github" src={GitHUbIcon} />
            </a>
          </div>
          <div className="logo">
            <a
              href="https://stackoverflow.com/users/19384439/"
              target="_blank"
              rel="noreferrer">
              <img alt="Stackoverflow" src={StackIcon} />
            </a>
          </div>
        </div>

        <section className="profile-pic" />
        <div className="header-text">
          <h3 className="name">Mia Dahlgren</h3>
          <h1 lang="en">Portfolio</h1>
          <h2>Front-end developer</h2>
          <h3>with a background as a curious bug hunter</h3>
        </div>

      </header>
    </HeaderStyling>

  );
}

export default Header

const HeaderStyling = styled.header`

@font-face {
    font-family: 'Aloevera' ;
    src: url('./fonts/Aloevera-OVoWO.ttf') format('truetype');
 }

    background-color: pink;
    background: url("./images/nailpolish.jpg") no-repeat;
    height: 110vw;
    background-size: 600px;
    background-position-y: -50px;
    background-position-x: -120px;

    .logo img {
        width: 5vw;
    }

    .social-media-links{
        display:flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 2vw;
        margin-right: 2vw;
        padding-top: 2vw;
    }

    h1{
        font-family: "Aloevera";
        color: #F6AD7B;
        font-size: 13vw;
        text-align: left;
    }
    
    h2{
        background-color: #F6AD7B;
        width: fit-content;
        text-align: center;
        font-family: 'Raleway Dots', cursive; 
        padding: 6px;
        color: white;
        font-size: 4vw;
    }

    h3 {
    width: fit-content;
    text-align: center;
    font-family: 'Raleway Dots', cursive;
    margin-top: 30px;
    padding: 6px;
    color: grey;
    font-size: 4vw;
    }

    .profile-pic {
      position: absolute;
      width: 29vw;
      height: 29vw;
      left:60%;
      top: 20%;
      border-radius: 50%;
      background: url("./images/profile_pic2.jpg");
      background-position: -30px 560px;
      background-size: 232px;
  }


    
    `