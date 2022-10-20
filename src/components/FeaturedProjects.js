import React from 'react';
import styled from 'styled-components/macro';

/* import weather from 'assets/weather-app.jpg' */

const FeaturedProjects = (
  {
    deploymentLink,
    gitLink,
    title,
    description,
    tags,
    image
    /* projectTitleFromReadMe */
  }
) => {
  return (
    <FeaturedProjectsCard>
      <a
        href={deploymentLink}
        target="_blank"
        rel="noreferrer">
        <FeaturedProjectsImage>
          <img
            src={image}
            alt="" />
          <h4 aria-hidden="true">{title}</h4>
        </FeaturedProjectsImage>
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
        <TagWrapper grey>
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
  
  @media (min-width: 668px) and (max-width: 1023px) {
    justify-content: space-between;
  }
`

const FeaturedProjectsCard = styled.div`
  width: 100%;
  margin-top: 5vh;

  @media (min-width: 668px) and (max-width: 1023px) {
    width: 45%;
  
  }
`

const FeaturedProjectsImage = styled.div`
  width: 100%;
  position: relative;
  height: 200px;
  & img {
    width: 100%;
    height: 200px;
    filter: brightness(75%);
    object-fit: cover;
  }
  & h4 {
    position: absolute;
    top: 45%;
    width: 100%;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 22px;
    text-align: center;
    color: #ffffff;
  }
`

const FeaturedProjectsInfo = styled.div`
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  margin: 1vh 0 1vh 0;
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

const TagWrapper = styled.h5`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & h5 {
    color: #2b2e34;
    font-weight: bold;
    background-color: ${(props) => (props.grey ? '#bbbbbb' : '#b1d0e0')};
    font-size: 12px;
    line-height: 12px;
    padding: 4px;
    margin: 10px 6px 3px 0;
    border-radius: 5px;
  }
`
