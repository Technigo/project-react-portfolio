import React from 'react';
import { OuterWrapper, InnerWrapper, MainHeadline, MediumHeadline } from 'styles/GlobalStyles';
import { MainProject } from './MainProject';

export const FeatProjects = () => {
  return (
    <OuterWrapper backGroundcolor="#f4f4f4">
      <MainHeadline>FEATURED PROJECTS</MainHeadline>
      <InnerWrapper backGroundcolor="#f4f4f4">
        <MainProject />
      </InnerWrapper>
      <MediumHeadline color="#BA4C08">OTHER PROJECTS</MediumHeadline>
    </OuterWrapper>
  )
}