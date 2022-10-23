import React from 'react';
/* import styled from 'styled-components/macro'; */

/* Components */
import { HeaderBackground, HeaderWrapper } from '../styles/GlobalStyles';
import { SocMedLinks } from './SocMed';
import { ProfileImage } from './ProfileImage';

/* Images */
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import stackoverflow from '../assets/stackoverflow.png';

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderWrapper>
        <SocMedLinks
          linkedin={linkedin}
          github={github}
          stackoverflow={stackoverflow}
          alignment="flex-end" />
        <ProfileImage />
      </HeaderWrapper>
    </HeaderBackground>
  )
}

export default Header
