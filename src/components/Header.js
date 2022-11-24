import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';
import Carro from '../images/Carro.jpeg';
import BackgroundImage from '../images/Yellow.png';
import Linkedin from '../icons/linkedinpink60.png';
import Github from '../icons/gitpink60.png';

export const Header = () => {
  const HeaderBackground = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;    
    width: 100%;
    height: 525px;
    background-color: var(---highlight);
    border-bottom: 1px solid var(---primary);
  `;

  const BackgroundImg = styled.img`
    background-size: cover;
    border: none;
    @media (max-width: 760px) {
      height: 100%;
    }
  `;

  const IconsContainer = styled.div`
    position: absolute;
    display: flex;
    top: 76px;
    right: 91px;
  `;

  const HeaderText = styled.div`
    position: absolute;
    width: 300px;
    top: 185px;
    left: 140px;
    padding: 0;
    margin: 0;
    color: #f06fdf;
    h2 {
      line-height: 18px;
      letter-spacing: 0.04em;
      font-weight: 700;
      font-size: 18px;
    }
    h1 {
      line-height: 45px;
      margin: 0;
      font-size: 40px;
      font-weight: 700;
    }
    h3 {
      line-height: 40px;
      font-weight: bold;
      font-size: 28px;
    }
  `;

  const ProfileImageWrapper = styled.div`
    position: absolute;
    overflow: hidden;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    z-index: 1;
    right: 20%;
    bottom: -67px;
    border: 1px solid var(---primary);
  `;

  const ProfileImage = styled.img`
    width: 109%;
    height: 100%
  `;

  return (
    <OuterWrapper>
      <HeaderBackground>
        <BackgroundImg src={BackgroundImage} />
        <InnerWrapper>
          <IconsContainer>
            <a
              href="https://www.linkedin.com/in/carolinesoderstrom/"
              target="_blank"
              rel="noreferrer">
              <img
                src={Linkedin}
                alt="Linkedin Caroline Soderstrom" />
            </a>
            <a
              href="https://github.com/SoderstromC"
              target="_blank"
              rel="noreferrer">
              <img
                src={Github}
                alt="Github Caroline Soderstrom" />
            </a>
          </IconsContainer>
          <HeaderText>
            <h2>caroline söderström</h2>
            <h1>Frontend Developer</h1>
            <h3>+ leadership & CX</h3>
          </HeaderText>
          <ProfileImageWrapper>
            <ProfileImage src={Carro} alt="Profile picture" />
          </ProfileImageWrapper>
        </InnerWrapper>
      </HeaderBackground>
    </OuterWrapper>
  )
}