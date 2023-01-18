import React, { useEffect, useState } from 'react';
import { BASE_URL } from 'util/URLs';
import { SmallHeadline, Tags, Tag } from 'styles/GlobalStyles';

const OtherProjects = () => {
  const [projects, setProjects] = useState([]);

  // Get all my projects from github
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => setProjects(json))
      .catch((error) => console.error(error))
  }, []);

  // Filter relevant projects
  const relProjects = projects.filter((item) => item.name.includes('project-') && (!item.name.includes('portfolio')));

  // Filter for projects not starred on github
  const remaining = relProjects.filter((item) => item.stargazers_count === 0 && item.name !== 'project-business-site' && item.name !== 'project-p5-game'
  && item.name !== 'project-p6-weather-app' && item.name !== 'project-p4-chatbot' && item.name !== 'project-p1-first-webpage'
  && item.name !== 'project-auth' && item.name !== 'project-express-api' && item.name !== 'project-express-api');

  // Function to map over the tags and display them
  const renderTags = (tags) => {
    return tags.map((tag) => {
      return <Tag key={tag}>{tag.toUpperCase()}</Tag>
    })
  }

  return (
    remaining.map((project) => {
      return (
        <a key={project.id} href={project.svn_url} target="_blank" rel="noopener noreferrer">
          <SmallHeadline>{project.name.replace('project-', '').replace('-', ' ')}</SmallHeadline>
          <p>{project.description}</p>
          <Tags>{renderTags(project.topics)}</Tags>
        </a>

      );
    })
  )
}
export default OtherProjects