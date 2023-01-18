import React from 'react';
import styled from 'styled-components';
import { LargeHeadline, OuterWrapper } from 'styles/GlobalStyles';

/* Images */
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import stackoverflow from '../assets/stackoverflow.png';

/* Links */
import SocMedLinks from './SocMed';

const ForMore = () => {
  return (

    <OuterWrapper>
      <LargeHeadline>FOR MORE</LargeHeadline>
      <SocMedLinksWrapper>
        <SocMedLinks
          linkedin={linkedin}
          github={github}
          stackoverflow={stackoverflow} />
      </SocMedLinksWrapper>
    </OuterWrapper>

  )
}
export const SocMedLinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly; 
  filter: invert(60%) sepia(48%) saturate(3441%) hue-rotate(342deg) brightness(93%) contrast(98%);

`
export default ForMore