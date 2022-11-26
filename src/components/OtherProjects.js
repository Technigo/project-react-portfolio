import React from 'react';
import styled from 'styled-components';
import data from '../assets/otherprojects.json'
import { SectionTitle, Wrapper, Tags, ProjectText, OverlinedHeading } from './GlobalStyles';

export const OtherProjects = () => {
  return (
    <Wrapper primary>
      <SectionTitle primary>OTHER PROJECTS</SectionTitle>
      <OtherProjectsContainer>
        {data.reverse().map((item) => (
          <OtherProjectsDisplay key={item.id}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              role="button">
              <OverlinedHeading>{item.title}</OverlinedHeading>
              <ProjectText primary>{item.description}
              </ProjectText>
            </a>
            <GithubRepoButton
              href={item.github_url}
              target="_blank"
              rel="noreferrer"
              label="button"
              type="button">View Github Repository
            </GithubRepoButton>
            <OtherProjectsTags>
              {item.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </OtherProjectsTags>
          </OtherProjectsDisplay>
        ))}
      </OtherProjectsContainer>
    </Wrapper>
  )
}

const OtherProjectsContainer = styled.div`
  padding-top: 10%;

  @media (min-width: 668px) and (max-width: 1023px){
    padding-top: 5%;
    }

  @media (min-width: 1024px){
    padding-top: 5%;
    }
`

const OtherProjectsDisplay = styled.div`
  margin-bottom: 10%;
  
  a{
    text-decoration: none;
    font-size: 15px;
    display: inline-block;
    font-weight: 400;
    transition: transform .8s; 

    &:hover{
    transform: scale(0.95);
    }
  } 

  @media (min-width: 1024px){
    margin-bottom: 5%;
  }       
`

const OtherProjectsTags = styled(Tags)`
  margin: 5% 0;

  @media (min-width: 600px) and (max-width: 1023px){
    margin-bottom: 10%;
  }

  @media (min-width: 1024px){
    margin: 2% 0 8% 0;
  }
`
const GithubRepoButton = styled.a`
  display: inline-block;
  margin-top: 2%;
  border: none;
  padding: 5px 10px;
  color: #003333;
  background-color: #ccd6d6;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: transform .5s; 

    &:hover{
    transform: scale(0.90);}
`
