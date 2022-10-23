import React from 'react';
import styled from 'styled-components';
import profile from '../assets/profile.png';
import image1 from '../assets/image1.png';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderSocialLogo>
        <a href="https://www.aftonbladet.se/">
          <img className="social-icon" src={github} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/YoTesfam">
          <img className="social-icon" src={linkedin} alt="Github logo" />
        </a>
      </HeaderSocialLogo>

      <HeaderTextGroup>
        <p className="header-portfolio"> PORTFOLIO:
          <span className="header-name">YOUNAS TESFAMARIAM</span>
        </p>
        <h1>Frontend developer</h1>
      </HeaderTextGroup>

      <ProfileImage src={profile} alt="headshot of Younas Tesfamariam" />
    </StyledHeader>
  )
}

export default Header;

// Styled components
const StyledHeader = styled.header`
    position: relative;
    background-size: cover;
    background-image: url(${image1});
    padding: 20px;
    height: 300px;
    width: 100%;
`

const HeaderSocialLogo = styled.div`
    margin-right: 50px;

    img {
    padding: 10px;
    width: 25px;
    margin: 3px 2px;
    float: right;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
    }
`

const HeaderTextGroup = styled.div`
    color: black;
    position: absolute;
    width: 320px;
    top: 80px;
    left: 590px;
    position: relative;
`
const ProfileImage = styled.img`
    width: 200px;
    border-radius: 50%;
    position: absolute;
    top: 150px;
    right: 200px;
    border: 2px solid white;
    overflow: hidden;
`