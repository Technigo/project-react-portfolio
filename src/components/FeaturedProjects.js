import React from 'react';

import { BlockSection, InnerWrapper } from './StyledComponents/Wrappers';
import { Tags } from './StyledComponents/Tags';
import data from '../projects.json';

console.log(data);

export const FeaturedProjects = () => {
  // const projects = data.projects.items;

  return (
    <BlockSection>
      <InnerWrapper>
        {/* {projects.map((item) => {
          return console.log(item.id);
        })} */}
        <h3>Featured Projects</h3>
        <Tags />
      </InnerWrapper>
    </BlockSection>
  );
};
