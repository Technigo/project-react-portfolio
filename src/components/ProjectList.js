import React from 'react'
import styled from 'styled-components'
import data from '../Assets/projects.json'

const ProjectList = () => {
  return (
    <ProjectOuterWrapper>
      {data.map((item) => (
        <FeatureProjectCard>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ProjectCodeContainer>
            {item.code}
          </ProjectCodeContainer>
          <ProjectBtns>
            {item.netlify}
            {item.github}
          </ProjectBtns>
        </FeatureProjectCard>
      ))}
    </ProjectOuterWrapper>
  )
}

export default ProjectList;

const ProjectOuterWrapper = styled.section`
`

const FeatureProjectCard = styled.div`

`

const ProjectCodeContainer = styled.span`
`

const ProjectBtns = styled.button`
`