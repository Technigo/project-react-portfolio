import React from 'react';
import { OuterWrapper, InnerWrapper, MainHeadline, MediumHeadline } from 'styles/GlobalStyles';
import { MainProjects } from './MainProjects';
import { OtherProjects, OtherProjsWrapper } from './OtherProjects';

export const FeatProjects = () => {
  return (
    <OuterWrapper backGroundcolor="#f4f4f4">
      <MainHeadline>FEATURED PROJECTS</MainHeadline>
      <InnerWrapper backGroundcolor="#f4f4f4">
        <MainProjects />
      </InnerWrapper>

      <MediumHeadline color="#BA4C08">OTHER PROJECTS</MediumHeadline>
      <OtherProjsWrapper backGroundcolor="#f4f4f4">
        <OtherProjects />
      </OtherProjsWrapper>
    </OuterWrapper>
  )
}