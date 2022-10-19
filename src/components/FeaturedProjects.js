import React from 'react';

import { ProjectGrid } from 'styledcomponents/Project';
import { Section, SectionTitle } from 'styledcomponents/Section';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  return (
    <Section>
      <SectionTitle>Featured projects </SectionTitle>
      <ProjectGrid>
        <ProjectCard />
      </ProjectGrid>
    </Section>
  );
};

export default FeaturedProjects;
