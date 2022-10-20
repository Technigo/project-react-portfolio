import React from 'react';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';
import FeaturedProject from 'components/FeaturedProject';
import OtherProject from 'components/OtherProject';

const Projects = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <h2>Featured projects</h2>
        <FeaturedProject />
        <h3>Other projects</h3>
        <OtherProject />
      </InnerWrapper>
    </OuterWrapper>
  );
};
export default Projects;