import React from 'react';
import styled from 'styled-components';
import { BLOOMSY_URL, LOVELITS_URL } from 'utils/Urls';

import Bloomsy from 'assets/newssite.png'
import Lovelits from 'assets/chatbot.png'

import { SectionTitle, Wrapper, Heading, ProjectParagraph, TagIcons, GridWrapper } from './GlobalStyles';

export const FeaturedProjects = () => {
  return (
    <Wrapper primary>
      <SectionTitle>FEATURED PROJECTS</SectionTitle>
      <GridWrapper>
        <ProjectCard>
          <a
            href={BLOOMSY_URL}
            target="_blank"
            rel="noreferrer">
            <ProjectDisplay>
              <img
                src={Bloomsy}
                alt="project news site screenshot" />
              <ProjectDisplayOverlay>
                <h3>Bloomsy</h3>
              </ProjectDisplayOverlay>
            </ProjectDisplay>
          </a>
          <Heading>A news site for plants lovers</Heading>
          <ProjectParagraph primary>Simple site that focused on the application of grid,
          flexbox and responsiveness.
          </ProjectParagraph>
          <TagIcons>
            <p>HTML</p>
            <p>CSS</p>
            <p>Flexbox</p>
            <p>Grid</p>
            <p className="tag-github-icon">Github</p>
          </TagIcons>
        </ProjectCard>
        <ProjectCard>
          <a
            href={LOVELITS_URL}
            target="_blank"
            rel="noreferrer">
            <ProjectDisplay>
              <img
                src={Lovelits}
                alt="project news site screenshot" />
              <ProjectDisplayOverlay>
                <h3>Bloomsy</h3>
              </ProjectDisplayOverlay>
            </ProjectDisplay>
          </a>
          <Heading>Ordering book with a twist</Heading>
          <ProjectParagraph primary>A project to create a chatbot for ordering books
          depending on users&apos; preferences with JavaScript as the main language.
          </ProjectParagraph>
          <TagIcons>
            <p>HTML</p>
            <p>CSS</p>
            <p>Pair Programming</p>
            <p>Javascript</p>
            <p className="tag-github-icon">Github</p>
          </TagIcons>
        </ProjectCard>
      </GridWrapper>
    </Wrapper>
  )
};

const ProjectCard = styled.div`
display: grid;
grid-template-columns: 100%;
margin-top: 5%;
margin-bottom: 5%;

@media (min-width: 668px) and (max-width: 1023px){
    width: 90%;
    border: 3px solid white;
}

@media (min-width: 1024px){
    width: 90%;
    border: 3px solid white;
}
`

const ProjectDisplay = styled.div`
margin: 2%;
    position: relative;

    img{
        display: block;
    width: 100%;
    height: 100%;
    }

    &:hover{
        opacity: 1;

        @media (min-width: 668px) and (max-width: 1023px)
               { margin: 2% 2%;}
    }
`
const ProjectDisplayOverlay = styled.div`
position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #fffbe9d6;

    h3{
        color: #614124;
    text-decoration: overline;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
}

    &:hover{
        opacity: 1;
    }
`

