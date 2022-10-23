import React from 'react'
import styled from 'styled-components/macro'
import { Heading } from 'GlobalStyles';
import img from 'images/Portfolio-image.jpg'
import backgroundImg from 'images/Header-image.jpg'

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeadings>
        <div className="heading-name">Portfolio: Ulrika Öhman</div>
        <Heading>Frontend<br />developer</Heading>
        <div className="heading-title2">& graphic designer</div>
      </StyledHeadings>
      <div className="profile-image-container">
        <img src={img} alt="Ulrikas profile" />
      </div>
      <SoMeContainer>
        <div className="soMe-icons">
          <a href="https://www.linkedin.com/in/ulrika-%C3%B6hman-2ab3056a/" target="_blank" rel="noreferrer">
            <SocialImage src="/project-images/linkedin.svg" alt="Go to my LinkedIn page" />
          </a>
          <a href="https://github.com/uohman" target="_blank" rel="noreferrer">
            <SocialImage src="/project-images/github.svg" alt="Go to my GitGub page" />
          </a>
        </div>
      </SoMeContainer>
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
background-image: url(${backgroundImg});
    color: blue;
    position: relative;
    width: 100%;
    height: 60vh;
    left: 0px;
    top: 0px;

    .profile-image-container img {
        position: absolute;
        width: 180px;
        height: 180px;
        right: 25%;
        bottom: -7%;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid white;
        float: right;
        margin-top: 80px;

        @media (max-width: 767.98px){
            position: absolute;
            width: 180px;
            height: 180px;
            right: 5%;
            bottom: -7%;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid white;
            float: right;
            margin-top: 80px;
            }
  }

  @media (max-width: 767.98px){
    background-position: bottom left;
    background-size: cover;
    height: 500px;
  }
`;

const StyledHeadings = styled.div`
    position: absolute;
    width: auto;
    
    left: 25vw;
    bottom: 70px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 40px;
    color: white;

    .heading-name {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 18px;
      line-height: 30px;
    }

    @media (max-width: 767.98px){
        position: absolute;
        top: 175px;
        left: 5%;
        color: white;
    }
  `;

export const SoMeContainer = styled.div`
    display: flex;
    position: absolute;
    right: 25vw;
    top: 100px;

    @media (max-width: 767.98px){
      
    right: 5%;
    top: 5%;
    }
`

export const SocialImage = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 10px;
            
        &:hover {
        filter: invert(45%) sepia(85%) saturate(4000%) hue-rotate(328deg) brightness(90%) contrast(96%);
        }
`
