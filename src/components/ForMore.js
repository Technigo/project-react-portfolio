import React from 'react';
import { MainHeadline, OuterWrapper } from 'styles/GlobalStyles';
import { SoMeLinks } from './SoMeLinks';
import linkedinRed from '../assets/linkedinRed.svg';
import githubRed from '../assets/githubRed.svg';

export const ForMore = () => {
  return (
    <OuterWrapper>
      <MainHeadline>FOR MORE</MainHeadline>
      <SoMeLinks image1={linkedinRed} image2={githubRed} red />
    </OuterWrapper>
  )
}
