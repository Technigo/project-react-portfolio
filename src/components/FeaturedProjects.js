import React from 'react';

import { Overlay, ProjectGrid } from 'styledcomponents/Project';
import { Section, SectionTitle } from 'styledcomponents/Section';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  return (
    <Section>
      <SectionTitle>Featured projects </SectionTitle>
      <ProjectGrid>
        <ProjectCard /> 
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectGrid>
    </Section>
  );
};

export default FeaturedProjects;
