import React from 'react';
import styled from 'styled-components/macro';
import { TagWrapper } from 'styles/ProjectStyles';

const FeaturedProjects = (
  {
    deploymentLink,
    gitLink,
    title,
    description,
    tags,
    image
  }
) => {
  return (
    <FeaturedProjectsCard>
      <a
        href={deploymentLink}
        target="_blank"
        rel="noreferrer">
        <FeaturedProjectsImageWrapper>
          <FeaturedProjectsImage
            src={image}
            alt="" />
          <FeaturedProjectsImageTitleCentered aria-hidden="true">{title}</FeaturedProjectsImageTitleCentered>
        </FeaturedProjectsImageWrapper>
        <FeaturedProjectsInfo>
          <h4>{title} BUILT IN {tags.includes('javascript') ? 'JAVASCRIPT' : 'REACT'}.</h4>
          <p>{description}</p>
          <TagWrapper>
            {tags.map((tag) => {
              return (
                <h5 key={tag}>{tag.toUpperCase()}</h5>
              )
            })}
          </TagWrapper>
        </FeaturedProjectsInfo>
      </a>
      <a
        href={gitLink}
        target="_blank"
        rel="noreferrer">
        <TagWrapper grey hover>
          <h5>GitHub Repo</h5>
        </TagWrapper>
      </a>
    </FeaturedProjectsCard>

  )
}
export default FeaturedProjects;

export const FeaturedProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  @media (min-width: 668px) {
    justify-content: space-between;
  }
`
const FeaturedProjectsCard = styled.div`
  width: 100%;
  margin-top: 5vh;

  @media (min-width: 668px) {
    width: 45%;  
  }
`
const FeaturedProjectsImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 200px;
  @media (min-width: 1024px) {
    :hover img {
      filter: brightness(50%);
    }
    :hover h4 {
      transform: scale(1.1);
    }
  }
`
const FeaturedProjectsImage = styled.img`
  width: 100%;
  height: 200px;
  filter: brightness(75%);
  object-fit: cover;    
`
const FeaturedProjectsImageTitleCentered = styled.h4`
  position: absolute;
  top: 45%;
  width: 100%;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: #ffffff;
`
const FeaturedProjectsInfo = styled.div`
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  margin: 1vh 0 0 0;
  & h4 {
    font-weight: 700;
    font-size: 17px;
    line-height: 29px;
    color: #406882;
    background-color: #f4f4f4;
  }
  & p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 17px;
    line-height: 29px;
    color: #000000;
    margin: 0
  }
`