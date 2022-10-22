import React from 'react';
import styled from 'styled-components';
import { LINKEDIN_URL, GITHUB_URL } from 'utils/Urls';
import { Title, IconContainer, IconButton } from './GlobalStyles';

export const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer>
        <IconButton
          primary
          type="button"
          href={LINKEDIN_URL}
          target="_blank">
          <img
            src="/images/linkedin-icon.svg"
            alt="LinkedIn icon for the header" />
        </IconButton>
        <IconButton
          primary
          type="button"
          href={GITHUB_URL}
          target="_blank">
          <img
            src="/images/github-icon.svg"
            alt="Github icon for the header" />
        </IconButton>
      </IconContainer>
      <TitleContainer>
        <Title><span>Portfolio:</span> Kartika Purwahyuningrum</Title>
        <h1>Front-End</h1>
        <h1>Developer</h1>
      </TitleContainer>
      <ImageContainer>
        <img src="/images/Kartika.png" alt="Kartika" />
      </ImageContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background-image: url('/images/heroimage.jpeg');
  height: 400px;
  background-position: bottom;
  background-attachment: fixed;
  position: relative;

  @media (min-width: 520px) and (max-width: 1023px){
    height: 500px;
  }

  @media (min-width: 1024px){
    height: 500px;
  }
`

const TitleContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 10%;
  line-height: 30px;

  h1{
    font-size: 25px;
    display: inline;
    margin-right: 5px;
    color: white;
  }

  span{
    font-weight: 100;
  }

  @media (min-width: 520px) and (max-width: 1023px){
    line-height: 50px;

    h1{
      font-size: 40px;
      display: block;
    }
  }

  @media (min-width: 1024px){
    line-height: 65px;
    left: 15%;

    h1{
      font-size: 50px;
      display: block;
    }
  }
`

const ImageContainer = styled.div`
  img{
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

@media (min-width: 520px) and (max-width: 1023px){
    img{
      width: 230px;
      height: 230px;
    }
}

@media (min-width: 1024px){
    img{
      width: 250px;
      height: 250px;
      bottom: -15%;
      right: 15%;
    }
}
`