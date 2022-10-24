import React from 'react';
import styled from 'styled-components';
import data from '../data.json';
import { OuterWrapper, InnerWrapper, SectionTitle, Tag } from './reusable/Wrappers';

export const Projects = () => {
  const ProjectSection = styled.div`
    padding: 75px 0px 10px 0px;
    background-color: white;
  `;

  const ProjectWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
  `;

  const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    width: 750px;
    height: fit-content;
    margin: 10px;
  `;

  const CardContent = styled.div`
    width: 335px;
    margin: 10px;  
      img {
        width: 325px;
        height: 325px;
        display: block;
      }
  `;

  const ProjectBackground = styled.img`
    position: relative;
    display: flex;
    width: 325px;
    height: 325px; 
    margin: 0 auto;
    &:hover{
      display: none;
    }
  `;

  const CardOverlay = styled.div`
    position: relative;
    display: flex;
    width: 325px;
    height: 325px; 
    margin: 0 auto;
    z-index: 1;
    background: white;
    opacity: 80%;
    transition: ease-in .3s;
  `;

  const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin: 20px 10px;
    h4 {
      color: #c8aa89c6;
      text-transform: uppercase;
      }
    p {
      color: #c8aa89c6;
      font-size: 15px;
      }
  `;

  const CardTags = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    a {
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>
        <ProjectSection>
          <SectionTitle>
            <p>featured projects</p>
          </SectionTitle>
          <ProjectWrapper>
            <CardWrapper>
              {data.map((item) => (
                item.sort < 5 ? (
                  <CardContent key={item.title}>
                    <a
                      href={item.netlify}
                      alt="project landingpage"
                      target="_blank"
                      rel="noopener noreferrer">
                      <CardOverlay>
                        <ProjectBackground img src={item.image} alt="placeholder" />
                      </CardOverlay>
                    </a>
                    <DetailsWrapper>
                      <a
                        href={item.github}
                        alt="project landingpage"
                        target="_blank"
                        rel="noopener noreferrer">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </a>
                      <CardTags>
                        <Tag>
                          {item.tech.map((tag) => (
                            <p className="tag" key={tag}>{tag}</p>
                          ))}
                        </Tag>
                      </CardTags>
                    </DetailsWrapper>
                  </CardContent>
                ) : null
              ))}
            </CardWrapper>
          </ProjectWrapper>
        </ProjectSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}