import React from 'react';
import styled from 'styled-components';
import backimgbasicbrush from './images/backimgbasicbrush.jpg';
import heroLinkedin from './images/LinkedIn-header.png';
import heroGithub from './images/GitHub-header.png';
import StackOverflowHeader from './images/StackOverflowHeader.png';
import profileImage from './images/profileImage.jpg';

/* Header component thats responsive depening where you view it,  */

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcons>
        <LineHeaderIcons href="https://stately-snickerdoodle-c346a9.netlify.app/www.linkedin.com/in/viktor-svensson-9a55891b2" target="_blank" rel="noreferrer">
          <IconsPaintBrush src={heroLinkedin} alt="LinkedIn icon for the header" />
        </LineHeaderIcons>
        <LineHeaderIcons href="https://github.com/ViktorSvenssonN" target="_blank" rel="noreferrer">
          <IconsPaintBrush src={heroGithub} alt="Github icon for the header" />
        </LineHeaderIcons>
        <LineHeaderIcons href="https://stackoverflow.com/users/apps/19384384" target="_blank" rel="noreferrer">
          <IconsPaintBrush
            src={StackOverflowHeader}
            alt="Stack Overflow icon for the header" />
        </LineHeaderIcons>
      </HeaderIcons>
      <HeaderTitle>
        <h3>Portfolio:<PaintBrush> Viktor Svensson</PaintBrush></h3>
        <h1>Front-End</h1>
        <h1>Developer</h1>
      </HeaderTitle>
      <HeaderImage>
        <img src={profileImage} alt="Mrs Cakes" />
      </HeaderImage>
    </HeaderContainer>
  );
};

/* My styled components for Header */

const PaintBrush = styled.span`
  background-image: linear-gradient(180deg,#f6c453,#f6c453);
  background-repeat: no-repeat;
  background-position: 2px bottom;
  background-size: 100% 20px;
  text-decoration: none;

  &:hover {
    pointer-events: none;
    background-image: none;
  }

`;

const IconsPaintBrush = styled.img`

  &:hover {
  border-radius: 50%;
  background-image: linear-gradient(45deg, #f6c453, #fefbe9);
  }

`;

const HeaderContainer = styled.header`
  background-image: url(${backimgbasicbrush});
  width: 100%;
  height: 400px;
  background-position: top center;
  background-size: cover;
  position: relative;

  @media (min-width: 1024px){
    height: 650px;  
  }
`;

const HeaderIcons = styled.div`
  position: absolute;
  right: 10%;
  top: 8%;
  background: none;

  img{
    height: 50px;
    margin-right: 10px;
    }

  &:hover{
   background: none;

  }

@media (min-width: 668px) and (max-width: 1023px){
    img{
        height: 65px
    }
}

@media (min-width: 1024px){
  right: 15%;
  top: 10%;

  img{
  height: 75px;  
  }
}  
}
`;

const LineHeaderIcons = styled.a`
  background: none;
  text-decoration: none;

  &:hover {
    background: none;
    text-decoration: none;
  }

`;

const HeaderTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  color: black;
  line-height: 30px;

  h3 {
    font-size: 18px;
  }

  h1 {
    font-size: 25px;
    display: block;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    h3 {
      font-size: 25px;
    }

    h1 {
      font-size: 40px;
      display: block;
    }
  }

  @media (min-width: 1024px) {
    left: 15%;

    h3 {
      font-size: 35px;
    }

    h1 {
      font-size: 55px;
      display: block;
    }
  }
`;
const HeaderImage = styled.div`
  img {
    object-fit: cover;
    object-position: top center;
    border-radius: 50%;
    border: 4px solid white;
    width: 170px;
    height: 170px;
    position: absolute;
    bottom: -10%;
    right: 10%;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    img {
      width: 230px;
      height: 230px;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 440px;
      height: 440px;
      bottom: -15%;
      right: 15%;
    }
  }
`;

export default Header;