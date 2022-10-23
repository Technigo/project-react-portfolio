/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-absolute-path */
import React from 'react';
import styled from 'styled-components/macro';
import heroImage from '../assets/hero-image.jpg';
import heroLinkedin from '../assets/linkedin.svg';
import heroGithub from '../assets/github.svg';
import heroStackOverflow from '../assets/stackoverflow.svg';
import profileImage from '../assets/joel-square.jpg';
import { InnerWrapper } from '../Styles';

const Header = () => {
  return (
    <HeaderOuter>
      <HeaderInner>
        <HeaderLinks>
          <a
            href="https://se.linkedin.com/in/joel-%C3%B6hman-b09307159"
            target="_blank"
            rel="noreferrer"
          >
            <AnchorDiv>
              <img src={heroLinkedin} alt="LinkedIn icon for the header" />
            </AnchorDiv>
          </a>
          <a href="https://github.com/joeohm" target="_blank" rel="noreferrer">
            <AnchorDiv>
              <img src={heroGithub} alt="Github icon for the header" />
            </AnchorDiv>
          </a>
          <a
            href="https://stackoverflow.com/c/technigo/users/368"
            target="_blank"
            rel="noreferrer"
          >
            <AnchorDiv>
              <img
                src={heroStackOverflow}
                alt="Stack Overflow icon for the header"
              />
            </AnchorDiv>
          </a>
        </HeaderLinks>
        <HeaderTitle>
          <h3>
            PORTFOLIO:
            <span> JOEL ÖHMAN</span>
          </h3>
          <h1>frontend</h1>
          <h1>developer</h1>
          <h2>+ DevOps engineer</h2>
        </HeaderTitle>
        <HeaderImage>
          <img src={profileImage} alt="Mrs Cakes" />
        </HeaderImage>
      </HeaderInner>
    </HeaderOuter>
  );
};

export default Header;

const HeaderOuter = styled.header`
  background-image: url(${heroImage});
  width: 100%;
  height: 520px;
  background-position: center;
  background-size: cover;
  position: relative;
  color: white;
  text-shadow: 0 2px 6px #000000;
`;

const HeaderInner = styled(InnerWrapper)`
  position: relative;
  height: 520px;
`;

const HeaderLinks = styled.div`
  display: flex;
  position: absolute;
  right: 0%;
  top: 10%;
  gap: 8px;
  /* background: #0000005e; */
  border-radius: 50px;
  padding: 5px 10px;

  img {
    height: 20px;
    box-shadow: 0px 0px 15px #000000;
  }

  // Makes it so the click-able area matches the circle of each icon
  a {
    border-radius: 50%;
  }

  @media (min-width: 668px) {
    img {
      height: 32px;
      box-shadow: 0px 0px 29px #000000;
    }
  }
`;

const AnchorDiv = styled.div`
  box-shadow: 0px 0px 29px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: white 2px solid;
  border-radius: 50%;

  &:hover {
    filter: opacity(0.7);
  }

  @media (min-width: 668px) {
    width: 75px;
    height: 75px;
    border: white 3px solid;
  }
`;

const HeaderTitle = styled.div`
  position: absolute;
  top: 30%;
  line-height: 30px;
  font-family: 'Montserrat Bold', sans-serif;

  h1 {
    margin: 10px 0;
    font-size: 40px;
    display: block;
  }
  h2 {
    margin: 10px 0;
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
    font-family: 'Roboto';
  }

  span {
    font-family: 'Roboto Bold', sans-serif;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    h1 {
      font-size: 40px;
      display: block;
    }
    h3 {
      font-size: 25px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 60px;
      display: block;
      margin: 20px 0;
      line-height: 50px;
    }

    h3 {
      font-size: 30px;
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
    bottom: -5%;
    right: 0;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    img {
      width: 230px;
      height: 230px;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 333px;
      height: 333px;
      bottom: -15%;
    }
  }
`;
