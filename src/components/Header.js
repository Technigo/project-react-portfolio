import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';
import Carro from '../images/Carro.jpeg';
import BackgroundImage from '../images/Watercolor.jpg'
import Linkedin from '../icons/linkedin60.png';
import Github from '../icons/github60.png';

export const Header = () => {
  const HeaderBackground = styled.header`
    position: relative;    
    background-color: var(---secondary);
    width: 100%;
    height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-bottom: 3px solid #F090D9;
`;

  const BackgroundImg = styled.img`
  background-size: cover;
  @media (max-width: 455px) {
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
      color: #e85ec8;
      position: absolute;
      width: 300px;
      top: 155px;
      left: 130px;
      padding: 0;
      margin: 0;

    h2 {
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      letter-spacing: 0.04em;
    }

    h1 {
      font-size: 40px;
      font-weight: 700;
      line-height: 45px;
      margin: 0;
    }

    h3 {
      font-weight: bold;
      font-size: 28px;
      line-height: 40px;
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
    border: 3px solid #F090D9;
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