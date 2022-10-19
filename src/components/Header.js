import React from 'react';
import styled from 'styled-components/macro';
import redRock from '../assets/redRock.jpg';
import { SoMeLinks } from './SoMeLinks';
import linkedinWhite from '../assets/linkedinWhite.svg';
import githubWhite from '../assets/githubWhite.svg';
import { ProfileImage } from './ProfileImage';

export const Header = () => {
  return (
    <HeaderBackground>
      <HeaderWrapper>
        <SoMeLinks image1={linkedinWhite} image2={githubWhite} alignment="flex-end" />
        PORTFOLIO:
          TINA BRUCE
        <h1>frontend developer</h1>
        <h2>with pharmaceutical industry background</h2>
        <ProfileImage />
      </HeaderWrapper>
    </HeaderBackground>
  )
}

export const HeaderBackground = styled.header`
  background-image: url('${redRock}');
  color: white;
  background-repeat: no-repeat;
  background-size: cover; 
`

export const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding-top: 1.5rem;
`
