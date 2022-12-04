import React from 'react';
import { MediumHeadline, OuterWrapper } from 'styles/GlobalStyles';
/* import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import stackoverflow from '../assets/stackoverflow.png'; */
import SocMedLinks from './SocMed';

const ForMore = () => {
  return (
    <OuterWrapper>
      <MediumHeadline>FOR MORE</MediumHeadline>
      <SocMedLinks />
    </OuterWrapper>
  )
}

export default ForMore