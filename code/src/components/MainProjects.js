import React, { useEffect, useState } from 'react';
import { BASE_URL, PROJECT_THUMBNAIL } from 'utils/urls';
import styled from 'styled-components/macro';
import { ProjectCard, Image, SmallHeadline, Tags, Tag } from 'styles/GlobalStyles';

export const MainProjects = () => {
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

  // Filter for 4 main projects (starred on github):
  const mainFour = relProjects.filter((item) => item.stargazers_count !== 0);

  // Function to map over the tags and display them:
  const renderTags = (tags) => {
    return tags.map((tag) => {
      return <Tag key={tag}>{tag.toUpperCase()}</Tag>
    })
  }

  // Image as link to deployed site and Text description as link to GitHub:
  return (
    <>
      <ProjectCard>
        <a href="https://mathorama.netlify.app/" target="_blank" rel="noopener noreferrer">
          <ImageContainer>
            <ImageOverlay />
            <Image src="https://raw.githubusercontent.com/brucette/project-math-app/master/frontend/preview/projPreview.png" alt="" />
            <OverlayTitle className="title">MATH APP</OverlayTitle>
          </ImageContainer>
        </a>
        <a href="https://github.com/brucette/project-math-app" target="_blank" rel="noopener noreferrer">
          <SmallHeadline>Math App</SmallHeadline>
          <p>
            A fullstack project of a math training and quiz app,
            where users can train their skills and challenge other users.
            For anyone wanting get better at math.
          </p>
          <Tags>
            {renderTags(['full-stack', 'react-redux', 'api-rest', 'express', 'mongodb', 'node-js', 'styled-components'])}
          </Tags>
        </a>
      </ProjectCard>
      <ProjectCard>
        <a href="https://bookit.brucette.com/" target="_blank" rel="noopener noreferrer">
          <ImageContainer>
            <ImageOverlay />
            <Image src="https://raw.githubusercontent.com/brucette/Bookit/main/code/preview/projPreview.png" alt="" />
            <OverlayTitle className="title">BookIt</OverlayTitle>
          </ImageContainer>
        </a>
        <a href="https://github.com/brucette/BookIt" target="_blank" rel="noopener noreferrer">
          <SmallHeadline>BookIt</SmallHeadline>
          <p>
            A fullstack project of a booking system where users
            can create an account and view and book available timeslots,
            as well as view all bookings and cancel their upcoming bookings.
          </p>
          <Tags>{renderTags(['full-stack', 'flask', 'python3', 'javascript', 'sqlite3', 'css', 'html'])}</Tags>
        </a>
      </ProjectCard>
      {mainFour.map((project) => {
        return (
          <ProjectCard key={project.id}>
            <a href={project.homepage} target="_blank" rel="noopener noreferrer">
              <ImageContainer>
                <ImageOverlay />
                <Image src={PROJECT_THUMBNAIL(project.name)} alt="" />
                <OverlayTitle className="title">{project.name.replace('project-', '').replace('-', ' ')}</OverlayTitle>
              </ImageContainer>
            </a>
            <SmallHeadline>{project.name.replace('project-', '').replace('-', ' ')}</SmallHeadline>
            <p>{project.description}</p>
            <Tags>{renderTags(project.topics)}</Tags>
            <div>
              <Link href={project.svn_url} target="_blank" rel="noopener noreferrer">View Code</Link>
            </div>
          </ProjectCard>
        );
      })}
    </>
  )
}

// STYLING FOR THE ABOVE REACT COMPONENT
const ImageContainer = styled.div`
  position: relative;
  /* This transition will cause the text to fade */
  transition: 0.5s ease;

  &:hover > .title {
    color: transparent;
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* This is a semi-transparent overlay on the image */
  background-color: rgba(0, 0, 0, 0.5);
  /* This will cause the overlay to fade */
  transition: 0.5s ease;

  &:hover {
    background-color: transparent;
  }
`

const OverlayTitle = styled.p`
  text-align: center;
  position: absolute;
  top: 33%;
  left: 25%;
  right: 26%;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`

const Link = styled.a`
  font-weight: bold;
  color: #555;

  &:hover {
    color: #BA4C08;
  }
`