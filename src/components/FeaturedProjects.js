import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle } from 'components/Section';
import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';

const FeaturedProjects = () => {
  return (
    <FeaturedWrap>
      <SectionTitle>Featured projects </SectionTitle>
      <ProjectCard />
      <ProjectList />
    </FeaturedWrap>
  );
};

export default FeaturedProjects;

/* --changing the section wrap to center featured projects-- */

const FeaturedWrap = styled(Section)`
padding-left: 1%;
padding-right: 1%;
@media (min-width: 1000px) {
padding-left: 15%;
padding-right: 15%;
  }
@media (min-width: 1250px) {
padding-left: 20%;
padding-right: 20%;
  }
@media (min-width: 2250px) {
padding-left: 25%;
padding-right: 25%;
  }
`;