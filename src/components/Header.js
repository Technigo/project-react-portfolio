import React from 'react';
import styled from 'styled-components/macro';

/* Components */
import SocMedLinks from './SocMed';

/* Images */
import woods from './assets/woods.jpg';
import { ProfileImage } from './ProfileImage';

export const Header = () => {
  return (
    <headerBackground>
      <HeaderWrapper>
        <SocMedLinks />
        <ProfileImage />
      </HeaderWrapper>
    </headerBackground>
  )
}

