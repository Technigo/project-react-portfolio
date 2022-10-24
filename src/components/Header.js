import React from 'react';
import styled from 'styled-components';
import { InnerWrapper } from './styles/Wrappers';
import backgroundImg from '../assets/forest.jpeg';
import profileImg from '../assets/sar.bild.jpg';
import { IconLinks } from './styles/IconLinks';

export const Header = () => {
  return (
    <HeaderBackground>
      {/* <BlockSection> */}
      <InnerWrapper>
        <HeaderImagesWrapper>
          <IconLinks />
          <ProfileImage src={profileImg} alt="Saralie Bognandi" />
        </HeaderImagesWrapper>
        <HeaderInfo>
          <p>
            Portfolio: <span>Saralie Bognandi</span>
          </p>
          <h1>frontend developer</h1>
          <h2>
            <span>& design engineer</span>
          </h2>
        </HeaderInfo>
      </InnerWrapper>
      {/* </BlockSection> */}
    </HeaderBackground>
  );
};

const HeaderBackground = styled.header`
  position: relative;
  background-image: linear-gradient(
      rgba(11, 11, 11, 0.52),
      rgba(11, 11, 11, 0.52)
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70vh;
  width: 100%;

  @media (min-width: 768px) {
    height: 50vh;
  }
  @media (min-width: 1024px) {
    height: 60vh;
  }
`;

const HeaderInfo = styled.div`
  position: absolute;
  left: 0;
  top: 5em;
  color: white;
  font-size: 1.4em;
  max-width: 70%;

  h1 {
    color: pink;
  }
  h2 {
  }
  p {
  }
  span {
    font-weight: lighter;
  }
  @media (min-width: 768px) {
    font-size: 2em;
  }
  @media (min-width: 1024px) {
    font-size: 2.2em;
  }
`;
const HeaderImagesWrapper = styled.div``;

const ProfileImage = styled.img`
  width: 10em;
  max-width: 200px;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: -2rem;

  @media (min-width: 768px) {
    width: 15em;
  }
  @media (min-width: 1024px) {
    width: 20em;
  }
`;
