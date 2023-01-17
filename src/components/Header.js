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
    <HeaderBackground>
      <HeaderWrapper>
        <SocMedLinks
          linkedin={linkedin}
          github={github}
          stackoverflow={stackoverflow} />
        <ProfileImage />
      </HeaderWrapper>
    </HeaderBackground>
  )
}

const HeaderBackground = styled.div`
    position: relative;
    background-image: url(${woods});
    width: 100vw;
    height: 40vh;
    background-repeat: no-repeat;
    background-size: cover;

`;

export default Header
