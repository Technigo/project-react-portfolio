import React from 'react';
import styled from 'styled-components/macro';
import data from '../data.json';
import { OuterWrapper, InnerWrapper, SectionTitle, Tag } from './reusable/Wrappers';

export const Projects = () => {
  const ProjectSection = styled.div`
    padding: 100px 0px 10px 0px;
    background-color: white;
    // border-bottom: solid 1px var(---main);
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
    width: 350px;
    margin: 10px;
    padding: 10px; 
      img {
        width: 80px;
        height: 80px;
        display: block;
        margin-top: 17px;
      }
  `;

  const ProjectBackground = styled.img`
    position: relative;
    display: flex;
    width: 325px;
    height: 325px; 
    margin: 0 auto;
  `;

  const CardOverlay = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 220px; 
    margin: 0 auto;
    z-index: 1;
    background: white;
    transition: ease-in .3s;
    border: 1px solid grey;
    &:hover{
      background: whitesmoke;
    }
  `;

  const MainProjectTitle = styled.p`
    display:flex;
    color: transparent;
    margin-top: 10px;
    &:hover{
      display: block;
      color: white;
      background-color: var(---primary);
      font-size: 17px;
      font-weight: bold;
      line-height: 22px;
      transition: 0.5s ease;   
      text-align: center; 
      width: 275px;
    }
  `

  const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin: 10px 0px;
    h4 {
      color: var(---primary);
      text-transform: uppercase;
      }
    p {
      color: grey;
      font-size: 15px;
      }
  `;

  const CardTags = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
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
                        <MainProjectTitle>{item.navigate}</MainProjectTitle>
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