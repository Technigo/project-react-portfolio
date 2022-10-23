import React from 'react'
import styled from 'styled-components'
import data from '../Assets/projects.json'

const ProjectList = () => {
  return (
    <ProjectOuterWrapper>
      {data.map((item) => (
        <FeatureProjectCard key={item.id}>
          <a
            href={item.netlify}
            target="_blank"
            rel="noreferrer"
            role="button">
            <ProjectImageOverlay>
              <img src={item.image} alt={item.overlay} />
            </ProjectImageOverlay>
          </a>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ProjectCodeContainer>
            {item.code.map((code) => (
              <p key={code}>{code}</p>
            ))}
          </ProjectCodeContainer>
        </FeatureProjectCard>
      ))}
    </ProjectOuterWrapper>
  )
}

export default ProjectList;

const ProjectOuterWrapper = styled.section`
        display: grid;
        grid-template-columns: 100%;
    h3 {
        font-size: 16px;
        margin-top: 0;
        margin-left: 2%;
    }

    p {
      margin-top: 0;
      margin-left: 2%;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 50% 50%;
      width: 90%;
    }
`

const FeatureProjectCard = styled.div`
    width: 250px;
    display: grid;
    grid-template-columns: 100%;
`

const ProjectImageOverlay = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
  border-width: 3px;
  width: 100%;
  transition: transform .8s; 
  opacity: 0.6;

  img {
    height: 250px;
    }
  &:hover {
    transform: scale(0.95);
    opacity: 1;
    }

    @media (min-width: 1024px) {
      img {
        height: 450px;
      }
    }
`

const ProjectCodeContainer = styled.div`
    margin: 5% 2%;
  p {
    display: inline-block;
    background-color: #1C658C;
    margin: 0 5px 5px 0;
    padding: 5px;
    color: white;
    font-size: 10px;
  }
`