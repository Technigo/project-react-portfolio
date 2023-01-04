/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import styled from 'styled-components/macro';

import linkedInIcon from 'assets/linkedin-color-icon-white.svg'
import gitHubIcon from 'assets/github-icon-white.svg'
import stackOverflowIcon from 'assets/stackoverflow-icon-white.svg'
import profilePic from 'assets/profile-pic.jpg'

import { gitHubLink, linkedInLink, stackOverflowLink } from 'utils/Urls';
import { OuterWrapper, InnerWrapper } from 'styles/ProjectStyles';

const Header = () => {
  const socialLinksHeader = [
    {
      name: 'Linkedin',
      link: linkedInLink,
      image: linkedInIcon
    },
    {
      name: 'Github',
      link: gitHubLink,
      image: gitHubIcon
    },
    {
      name: 'Stackoverflow',
      link: stackOverflowLink,
      image: stackOverflowIcon
    }
  ]
  return (
    <OuterWrapper>
      <BackgroundImg />
      <InnerWrapper>
        <Links>
          {socialLinksHeader.map((socialLink) => {
            return (
              <a
                href={socialLink.link}
                target="_blank"
                rel="noreferrer"
                key={socialLink.name}>
                <img
                  src={socialLink.image}
                  alt={socialLink.name} />
              </a>
            )
          })}
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
    @media (min-width: 668px) {
      height: 40px;
      margin: 2vw;
    }
    @media (min-width: 1024px) {
    :hover {
      transform: scale(1.1)
    }
  }
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
  @media (min-width: 668px) {
    width: 170px;
    height: 170px;
  }
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

  @media (min-width: 668px) {
    width: 270px;
    & p {
      font-size: 17px;
      line-height: 30px;
    }
    & h1 {
      font-size: 50px;
      line-height: 55px;
    }
    & h2 {
      font-size: 28px;
      line-height: 45px;
    }
    }
`

