import React, { useEffect, useState } from 'react';
import { BASE_URL } from 'utils/urls';
import { SmallHeadline, Tags, Tag } from 'styles/GlobalStyles';

export const OtherProjects = () => {
  const [projects, setProjects] = useState([]);

  // Get all my projects on GitHub via API call:
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => setProjects(json))
      .catch((error) => console.error(error))
  }, []);

  // Filtered array with all relevant projects:
  const relProjects = projects.filter((item) => item.name.includes('project-') && (!item.name.includes('portfolio')));

  // Filter for other projects (not starred on github):
  const remaining = relProjects.filter((item) => item.stargazers_count === 0 && item.name !== 'project-business-site');

  // Function to map over the tags and display them:
  const renderTags = (tags) => {
    return tags.map((tag) => {
      return <Tag>{tag}</Tag>
    })
  }

  return (
    remaining.map((project) => {
      return (
        <a key={project.id} href="#" target="_blank" rel="noopener noreferrer">
          <SmallHeadline>{project.name.replace('project-', '').replace('-', ' ')}</SmallHeadline>
          <p>{project.description}</p>
          <Tags>{renderTags(project.topics)}</Tags>
        </a>
      );
    })
  )
}

