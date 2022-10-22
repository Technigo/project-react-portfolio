import styled from 'styled-components';
import React from 'react'
import { Wrapper } from 'components/GlobalStyles'
import data from '../Assets/otherProjects.json'

export const OtherProjects = () => {
  return (
    <OtherWrapper primary>
      {data.map((item) => (
        <OtherProjectCard key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ProjectCodeContainer>
            {item.code.map((code) => (
              <p key={code}>{code}</p>
            ))}
          </ProjectCodeContainer>
        </OtherProjectCard>
      ))}
    </OtherWrapper>
  )
}

export default OtherProjects;

const OtherWrapper = styled(Wrapper)`
`

const OtherProjectCard = styled.div`
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