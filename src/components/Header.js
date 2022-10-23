import React from 'react';
import styled from 'styled-components/macro';
/* Other components */
import { HeaderWrapper } from 'styles/GlobalStyles';
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
        <SoMeLinks image1={linkedinWhite} image2={githubWhite} alignment="flex-end" width="3rem" height="3rem" />
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