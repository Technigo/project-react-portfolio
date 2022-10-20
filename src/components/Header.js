/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import styled from 'styled-components/macro';

import { OuterWrapper, InnerWrapper } from 'styles/ProjectStyles';

const Header = ({ linkedin, github, stack, profilePic }) => {
  return (
    <OuterWrapper>
      <BackgroundImg />
      <InnerWrapper>
        <Links>
          <a
            href="https://www.linkedin.com/in/david-ballester-font-3626bb8a/"
            target="_blank"
            rel="noreferrer">
            <img
              src={linkedin}
              alt="Linkedin" />
          </a>
          <a
            href="https://github.com/Fonnt"
            target="_blank"
            rel="noreferrer">
            <img
              src={github}
              alt="Github" />
          </a>
          <a
            href="https://stackoverflow.com/users/19384589/font"
            target="_blank"
            rel="noreferrer">
            <img
              src={stack}
              alt="Stack overflow" />
          </a>
        </Links>
        <ProfileImg>
          <img
            src={profilePic}
            alt="profile portrait" />
        </ProfileImg>
        <InfoHeader tabIndex="0">
          <p>PORTFOLIO: <span>DAVID BALLESTER</span></p>
          <h1>frontend developer</h1>
          <h2>+ leading</h2>
        </InfoHeader>
      </InnerWrapper>
    </OuterWrapper>
  )
}
export default Header;

const BackgroundImg = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  z-index: -1;
  filter: brightness(73%);
  background: linear-gradient(135deg, #1a374d 20%, #6998ab);
`

const Links = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 10%;
  & img {
    height: 30px;
    margin: 2vw;
  }
`
const ProfileImg = styled.div`
position: absolute;
  right: 0;
  top: 75%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid whitesmoke;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`

const InfoHeader = styled.div`
  position: absolute;
  width: 220px;
  left: 0;
  top: 40%;
  color: #ffffff;
  font-weight: 700;
  font-family: 'Montserrat';
  & p {    
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.04em;
    font-family: 'Roboto';
    font-weight: 400;
    margin: 0;
    color: #ffffff;
    & span {
      font-weight: 700;
    }
  }
  & h1 {       
    font-size: 40px;
    line-height: 49px;
  }
  & h2 {
    font-size: 24px;
    line-height: 40px;
  }
`

