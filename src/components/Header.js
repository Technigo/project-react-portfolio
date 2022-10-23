import React from 'react';
import styled from 'styled-components/macro';
import woods from '../assets/woods.jpg';
/* Components */
import { HeaderWrapper } from '../styles/GlobalStyles';
import SocMedLinks from './SocMed';
import { ProfileImage } from './ProfileImage';

/* Images */
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import stackoverflow from '../assets/stackoverflow.png';

const Header = () => {
  return (
    <>
      <HeaderBackground woods={woods} />
      <HeaderWrapper>
        <SocMedLinks
          linkedin={linkedin}
          github={github}
          stackoverflow={stackoverflow} />
        <ProfileImage />
      </HeaderWrapper>
    </>
  )
}

const HeaderBackground = styled.div`
    width: 100vw;
    background-repeat: no-repeat;
    object-fit: cover;

`;

export default Header
