import React, { useEffect, useState } from 'react';
import { BASE_URL } from 'utils/urls';
import styled from 'styled-components/macro';
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
  const remaining = relProjects.filter((item) => item.stargazers_count === 0 && item.name !== 'project-business-site' && item.name !== 'project-math-app');

  // Function to map over the tags and display them:
  const renderTags = (tags) => {
    return tags.map((tag) => {
      return <Tag key={tag}>{tag.toUpperCase()}</Tag>
    })
  }

  return (
    remaining.map((project) => {
      return (
        <Other>
          <SmallHeadline>{project.name.replace('project-', '').replace('-', ' ')}</SmallHeadline>
          <p>{project.description}</p>
          <Tags>{renderTags(project.topics)}</Tags>
          <div>
            <Link href={project.homepage} target="_blank" rel="noopener noreferrer">View it Live</Link>
            <Separator>|</Separator>
            <Link href={project.svn_url} target="_blank" rel="noopener noreferrer">View Code</Link>
          </div>
        </Other>
      );
    })
  )
}

const Other = styled.div`
  margin: 1rem 0;
  padding: 0;
  
  @media (min-width: 1025px) {
    
    p {
      max-width: 60%;
    }
  }
  
`

const Link = styled.a`
  font-weight: bold;
  color: #555;
  font-family: Montserrat;

  &:hover {
    color: #BA4C08;
  }
`
const Separator = styled.span`
  margin: 0 0.5rem;
  color: #BA4C08;
  font-weight: bold;
`