import React from 'react';
import { OuterWrapper, InnerWrapper, LargeHeadline, AlignLeftWrapper } from 'styles/GlobalStyles';
import FeaturedProjects from './FeaturedProj'
import OtherProjects from './OtherProj';

const AllProjects = () => {
  return (
    <OuterWrapper>
      <LargeHeadline>FEATURED PROJECTS</LargeHeadline>
      <InnerWrapper>
        <FeaturedProjects />
      </InnerWrapper>

      <LargeHeadline>OTHER PROJECTS</LargeHeadline>
      <AlignLeftWrapper>
        <OtherProjects />
      </AlignLeftWrapper>
    </OuterWrapper>
  )
}
export default AllProjects;