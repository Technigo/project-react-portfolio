import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle, Tag } from './reusable/Wrappers';
import data from '../data.json'
import Github from '../icons/github30.png';

export const Projects = () => {
  const ProjectSection = styled.div`
    padding: 50px 0;
  `

  const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
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
    word-break: break-all;
    img {
      width: auto;
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
  const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`
  const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
`

  const OtherProjects = styled.div`
    padding: 20px 0;
  `

  const OtherProjectsList = styled.p`
    text-transform: uppercase;
    text-align: left;
    text-decoration: none;
  `

  return (
    <OuterWrapper>
      <InnerWrapper>
        <ProjectSection>
          <SectionTitle>
            <p>Featured projects</p>
          </SectionTitle>
          <CardWrapper>
            {data.map((item) => (
              item.id < 3 ? (
                <CardInfo key={item.title}>
                  <a
                    href={item.netlify}
                    alt="project landingpage"
                    target="_blank"
                    rel="noopener noreferrer">
                    <CardOverlay />
                    <img src={item.image} alt="project poster" />
                  </a>
                  <DetailsWrapper>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a
                      href={item.github}
                      alt="project landingpage"
                      target="_blank"
                      rel="noopener noreferrer">
                      link
                    </a>
                    <CardFooter>
                      <Tag>
                        {item.tools.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </Tag>
                    </CardFooter>
                  </DetailsWrapper>
                </CardInfo>
              ) : null
            ))}
          </CardWrapper>

          <h3>OTHER PROJECTS</h3>
          <OtherProjects>
            {data.map((item) => (
              item.id > 2 ? (
                <OtherProjectsList key={item.title}>
                  <a
                    href={item.netlify}
                    alt="project landingpage"
                    target="_blank"
                    rel="noopener noreferrer">
                    <p>{item.title}</p>
                  </a>
                  <p>{item.description}</p>
                  <a
                    href={item.github}
                    alt="project landingpage"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={Github}
                      alt="Github Caroline Soderstrom" />
                  </a>
                  <Tag>
                    {item.tools.map((tag) => (
                      <p key={tag}>{tag}</p>
                    ))}
                  </Tag>
                </OtherProjectsList>
              ) : null
            ))}
          </OtherProjects>
        </ProjectSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}