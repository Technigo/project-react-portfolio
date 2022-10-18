import React from 'react';
import { SoMeLinks } from './SoMeLinks';
import { ProfileImage } from './ProfileImage';
import { HeaderBackground } from '../styles/HeaderBackground';
import { HeaderWrapper } from '../styles/HeaderWrapper';

export const Header = () => {
  return (
    <HeaderBackground>
      <HeaderWrapper>
        <SoMeLinks />
        <p>PORTFOLIO:
          <span>TINA BRUCE</span>
          <h1>frontend developer</h1>
          <h2>with pharmaceutical industry background</h2>
        </p>
        <ProfileImage />
      </HeaderWrapper>
    </HeaderBackground>
  )
}
