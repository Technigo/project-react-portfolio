import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './StyledComponents/Wrappers';
import { Tags } from './StyledComponents/Tags';
import data from '../projects.json';
import backgroundImg from '../assets/forest.jpeg';

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
        <div>
          <img src={backgroundImg} alt="project img" width="50%" />
          <FeaturedContent>
            <h5>Title</h5>
            <p>Description</p>
            <a href="netlifyLink">View it Live</a> <span>|</span>{' '}
            <a href="githubLink">View on Github</a>
            <Tags />
          </FeaturedContent>
        </div>
        <h4>Other projects</h4>
        <div>
          <h5>Title</h5>
          <p>Description</p>
          <a href="netlifyLink">View it Live</a> <span>|</span>{' '}
          <a href="githubLink">View on Github</a>
          <Tags />
        </div>
      </InnerWrapper>
    </BlockSection>
  );
};

const FeaturedContent = styled.div`
  background-color: green;
  width: 50%;
  height: 50%;
  h5 {
    font-size: 1.3rem;
  }
`;
