import React from 'react';
import styled from 'styled-components';

const ProjectList = ({ repos }) => {
  return (
    <ProjectsSection>
      <h2>Projects:</h2>
      <List>
        {repos.reverse().map((project) => {
          return (
            <ArticleContainer other key={project.id}>
              <h5>{project.name.split('-').join(' ').slice(8)}</h5>
              <p>{project.description}</p>
              <TopicsContainer aria-hidden>
                {project.topics.map((topic) => (topic !== 'portfolio' && <p>{topic}</p>))}
              </TopicsContainer>
              <TopicsContainer>
                <a href={project.html_url} target="_blank" rel="noreferrer">GitHub Repo</a>
              </TopicsContainer>
            </ArticleContainer>
          );
        })}
      </List>
    </ProjectsSection>
  )
};

export default ProjectList;

const ProjectsSection = styled.div`
background: rgb(203, 202, 202);
padding: 3.5rem;
font-size: large;
display: flex;
flex-direction: column;
align-items: center;
h2 {
    background: salmon;
    padding: 5px;
}
`;

const List = styled.div`
display: grid;
grid-template-columns: ${(props) => (props.other ? '1fr' : '1fr 1fr')};
gap: 2rem;
margin: var(--margin);
width: var(--width);
  & h5 {
    // margin-top: ${(props) => (props.other ? '0' : '0.7rem')};
  }
@media (max-width: 650px) {
  grid-template-columns: 1fr;
}
`;

const ArticleContainer = styled.article`
  display: grid;
  grid: 1fr;
  ${({ other }) => (other && { margin: 'var(--margin)', width: 'var(--width)' })};
    & h5 {
      margin-bottom: 0.1rem;
      ${({ thoughts }) => (thoughts && { fontWeight: '500', textTransform: 'capitalize' })};
    }
    & a {
      ${({ thoughts }) => (thoughts && { marginTop: '.4rem' })};
    }
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem;
  height: fit-content;
      & span {
        font-weight: 600;
        color: var(--main-color);
      }
      & a {
        text-decoration: underline;
      }
`;