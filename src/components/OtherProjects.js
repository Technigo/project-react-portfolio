import React from 'react';
import styled from 'styled-components';
import data from '../assets/otherprojects.json'
import { SectionTitle, Wrapper, TagIcons, ProjectParagraph, OverlinedHeading } from './GlobalStyles';

export const OtherProjects = () => {
  return (
    <Wrapper primary>
      <SectionTitle primary>OTHER PROJECTS</SectionTitle>
      <OtherProjectsList>
        {data.map((item) => (
          <OtherProjectsDisplay key={item.id}>
            <a
              href={item.netlify_url}
              target="_blank"
              rel="noreferrer"
              role="button">
              <OverlinedHeading>{item.title}</OverlinedHeading>
              <ProjectParagraph primary>{item.description}
              </ProjectParagraph>
            </a>
            <OtherProjectsTags>
              {item.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </OtherProjectsTags>
          </OtherProjectsDisplay>
        ))}

      </OtherProjectsList>
    </Wrapper>
  )
}

const OtherProjectsList = styled.div`
  padding-top: 10%;

  @media (min-width: 1024px){
    padding-top: 5%;
    }
`
const OtherProjectsDisplay = styled.div`
  margin-bottom: 20%;
  
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

  @media (min-width: 600px) and (max-width: 1023px){
    margin-bottom: 10%;
  }

  @media (min-width: 1024px){
    margin-bottom: 5%;
  }
         
`
const OtherProjectsTags = styled(TagIcons)`
  margin: 5% 0;

  @media (min-width: 600px) and (max-width: 1023px){
    margin-bottom: 10%;
  }

  @media (min-width: 1024px){
    margin: 2% 0 8% 0;
  }
`

