import React from 'react';
import { OuterWrapper, InnerWrapper, MediumHeadline } from 'styles/GlobalStyles';
import FeaturedProjects from './FeaturedProj'
import OtherProjects from './OtherProj';

const AllProjects = () => {
  return (
    <OuterWrapper>
      <MediumHeadline>FEATURED PROJECTS</MediumHeadline>
      <InnerWrapper>
        <FeaturedProjects />
      </InnerWrapper>

      <MediumHeadline>OTHER PROJECTS</MediumHeadline>
      <OtherProjects />
    </OuterWrapper>
  )
}
export default AllProjects;