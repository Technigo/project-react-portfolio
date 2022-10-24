import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle, Tag } from './reusable/Wrappers';
import data from '../data.json'

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
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 750px;
    height: fit-content;
    justify-content: space-between;
    align-content: space-between;
  `;

  const CardContent = styled.div`
    margin: 10px;  
    width: 335px;
      img {
        width: 325px;
        height: 325px;
        display: block;
      }
  `;
  const ProjectBackground = styled.img`
    width: 325px;
    height: 325px; 
    display: flex;
    position: relative;
    margin: 0 auto;
    &:hover{
      display: none;
    }
  `;
  const CardOverlay = styled.div`
    width: 325px;
    height: 325px; 
    background: white;
    display: flex;
    position: relative;
    margin: 0 auto;
    z-index: 1;
    opacity: 80%;
    transition: ease-in .3s;
  `;
  const DetailsWrapper = styled.div`
    margin: 20px 10px;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-between;
    h4 {
      color: #c8aa89c6;
      text-transform: uppercase;
      }
    p {
      color: #c8aa89c6;
      font-size: 15px;
      }
    `;
  const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
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
                item.id < 5 ? (
                  <CardContent key={item.title}>
                    <a
                      href={item.netlify}
                      alt="project landingpage"
                      target="_blank"
                      rel="noopener noreferrer">
                      <CardOverlay>
                        <ProjectBackground img src={item.image} alt="project poster" />
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
                      <CardFooter>
                        <Tag>
                          {item.tools.map((tag) => (
                            <p className="tag" key={tag}>{tag}</p>
                          ))}
                        </Tag>
                      </CardFooter>
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