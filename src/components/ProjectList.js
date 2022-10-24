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
              <TopicsContainer>
                {project.topics.map((topic) => (topic !== 'portfolio' && <p>{topic}</p>))}
              </TopicsContainer>
              <LinksContainer>
                <a href={project.homepage} target="_blank" rel="noreferrer">View webside</a>
                <a href={project.html_url} target="_blank" rel="noreferrer">GitHub Repo</a>
              </LinksContainer>
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
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 17px;
}
`;

const List = styled.div`
display: grid;
grid-template-columns: 25% 25% 25% 25%;
width: 100%;
  & h5 {
    // margin-top: ${(props) => (props.other ? '0' : '0.7rem')};
  }
@media (max-width: 650px) {
  grid-template-columns: 1fr;
}
@media (max-width: 950px) {
  grid-template-columns: 50% 50%;
}
`;

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  line-height: 0.5rem;
  padding: 10px;
  border: 5px solid black;
  background: white;
  width: 80%;
  margin-bottom: 10px;
  font-family: Arial;
  line-height: 1.5rem;
  h5 {
    text-transform: capitalize;
  }
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0px;
  p {
   padding-left: 10px;
   padding-right: 15px;
   padding-top: 12px;
   padding-bottom: 10px;
   background: salmon;
   border-radius: 7px;
}
`;

const LinksContainer = styled.div`
a{
  padding-right: 15px;
  padding-left: 5px;
}
`;