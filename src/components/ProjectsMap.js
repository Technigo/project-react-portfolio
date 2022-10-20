import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import { FeaturedProjects } from './FeaturedProjects';
import projects from '../projects.json';

export const ProjectsMap = () => {
  const [repos, setRepos] = useState([]);
  const featuredProjects = [];
  const otherProjects = [];

  useEffect(() => {
    console.log('Projects', { projects });
    fetch(projects)
      .then((data) => data.json())
      .then((json) => setRepos(json));
  }, []);

  return <FeaturedProjects />;
};
