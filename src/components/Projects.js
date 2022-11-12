import React from 'react';
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { InnerWrapper, OuterWrapper, SiteSection, SectionTitle, Tag } from './global/GlobalStyling';
import data from '../data.json'

export const Projects = () => {
  const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    margin-bottom: 20px;
    a {
      text-decoration: none;
      color: #000;
      position: relative;
      display: block;
    }
    @media (max-width: 798px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
  const CardInfo = styled.div`
    margin-top: 50px;
    padding-bottom: 30px;
    width: 100%;

    img {
      width: 100%;
      height:250px;
      display: block;
    }
`
  const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(156, 166, 197, 0.2);
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: transparent;
  }
`
  const DetailsWrapper = styled.div`
  text-align: left;
`
  const ProjectCardHeading = styled.h3`
    color: var(--color-mediumblue);
  `

  const OtherProjectHeading = styled.h3`
    color: var(--color-darkblue);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    margin-top: 30px;
  `

  const OtherProjects = styled.div`
    padding: 20px 0;
  `

  const OtherProjectsWrapper = styled.div`
  margin-bottom: 30px;
  `

  const OtherProjectsList = styled.p`
    text-transform: uppercase;
    font-weight: 600;
    text-align: left;
    color:  var(--color-darkblue);
  `

  const ProjectLink = styled.a`
    color:  var(--color-mediumblue);
  `

  const ProjectLinkDescription = styled.a`
    text-decoration: none;
    color:  var(--color-darkblue);
  `

  return (
    <OuterWrapper>
      <InnerWrapper>
        <SiteSection>
          <SectionTitle>
            <p>Featured projects</p>
          </SectionTitle>
          <CardContainer>
            {data.map((item) => (
              item.id < 3 ? (
                <CardInfo key={item.title}>
                  <ProjectLink
                    href={item.netlify}
                    alt="project landingpage"
                    target="_blank"
                    rel="noopener noreferrer">
                    <CardOverlay />
                    <img src={item.image} alt="project poster" />
                  </ProjectLink>
                  <DetailsWrapper>
                    <ProjectCardHeading>{item.title}</ProjectCardHeading>
                    <a
                      href={item.github}
                      alt="project landingpage"
                      target="_blank"
                      rel="noopener noreferrer">
                      <p>{item.description}</p>
                      <FontAwesomeIcon icon={faGithub} size="2x" color="var(--color-darkblue)" />
                    </a>
                    <Tag>
                      {item.tools.map((tag) => (
                        <p key={tag}>{tag}</p>
                      ))}
                    </Tag>
                  </DetailsWrapper>
                </CardInfo>
              ) : null
            ))}
          </CardContainer>

          <OtherProjectHeading>other projects</OtherProjectHeading>
          <OtherProjects>
            {data.map((item) => (
              item.id > 2 ? (
                <OtherProjectsWrapper>
                  <OtherProjectsList key={item.title}>
                    <ProjectLink
                      href={item.netlify}
                      alt="project landingpage"
                      target="_blank"
                      rel="noopener noreferrer">
                      <p>{item.title}</p>
                    </ProjectLink>
                    <ProjectLinkDescription
                      href={item.github}
                      alt="project landingpage"
                      target="_blank"
                      rel="noopener noreferrer">
                      <p>{item.description}<span>{'>>>'}</span></p>
                      <FontAwesomeIcon icon={faGithub} size="2x" color="var(--color-darkblue)" />
                    </ProjectLinkDescription>
                    <Tag>
                      {item.tools.map((tag) => (
                        <p key={tag}>{tag}</p>
                      ))}
                    </Tag>
                  </OtherProjectsList>
                </OtherProjectsWrapper>
              ) : null
            ))}
          </OtherProjects>
        </SiteSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}