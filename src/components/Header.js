import React from 'react';
import styled from 'styled-components/macro';
/* Other components */
import { SoMeLinks } from './SoMeLinks';
import { ProfileImage } from './ProfileImage';
import { HeaderIntro } from './HeaderIntro';
/* Images */
import redRock from '../assets/redRock.jpg';
import linkedinWhite from '../assets/linkedinWhite.svg';
import githubWhite from '../assets/githubWhite.svg';

export const Header = () => {
  return (
    <HeaderBackground>
      <HeaderWrapper>
        <SoMeLinks image1={linkedinWhite} image2={githubWhite} alignment="flex-end" />
        <HeaderIntro />
        <ProfileImage />
      </HeaderWrapper>
    </HeaderBackground>
  )
}

export const HeaderBackground = styled.header`
  width: 100vw;
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
