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
            <ProjectOverlay>
              <h3>{item.overlay}</h3>
            </ProjectOverlay>
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
    h3 {
        font-size: 16px;
        margin-top: 0;
        margin-left: 2%;
    }

    p {
      margin-top: 0;
      margin-left: 2%;
    }
`

const FeatureProjectCard = styled.div`
    display: grid;
    grid-template-columns: 100%;
    width: 90%;
    transition: transform .8s;
`

const ProjectOverlay = styled.div`
  margin: 2%;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 100%;
    }

    &:hover{
        opacity: 1;
    }

    h3 {
    }
`

const ProjectImageOverlay = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
  border-width: 3px;
  border-style: solid; 
  width: 90%;
  transition: transform .8s; 
  &:hover {
    transform: scale(0.95);
    border-style: solid; 
  }
`

const ProjectCodeContainer = styled.div`
    margin: 5% 2%;
  p {
    display: inline-block;
    background-color: #1C658C;
    margin: 0 5px 5px 0;
    padding: 5px;
    color: ${(props) => (props.primary ? '#003333' : 'white')};
    font-size: 10px;
  }
`