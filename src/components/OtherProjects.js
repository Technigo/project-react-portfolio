import React from 'react';
import styled from 'styled-components/macro';

import { TagWrapper } from './FeaturedProjects';

const OtherProjects = (
  {
    deploymentLink,
    gitLink,
    title,
    description,
    tags
  }
) => {
  return (
    <OtherProjectsInfo>
      <a
        href={deploymentLink}
        target="_blank"
        rel="noreferrer">
        <h4>{title}</h4>
        <p>{description}</p>
        <TagWrapper>
          {tags.map((tag) => {
            return (
              <h5 key={tag}>{tag.toUpperCase()}</h5>
            )
          })}
        </TagWrapper>
      </a>
      <a
        href={gitLink}
        target="_blank"
        rel="noreferrer">
        <TagWrapper grey>
          <h5>GitHub Repo</h5>
        </TagWrapper>
      </a>
    </OtherProjectsInfo>
  )
}
export default OtherProjects;

const OtherProjectsInfo = styled.div`
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  margin: 1vh 0 3vh 0;
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
    margin: 0;
  }
`