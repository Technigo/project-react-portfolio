import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './StyledComponents/Wrappers';
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
        <Test>Featured Projects</Test>
      </InnerWrapper>
    </BlockSection>
  );
};

const Test = styled.div`
  color: red;
`;
