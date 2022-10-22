import styled from 'styled-components';
import React from 'react'
import { Wrapper } from 'components/GlobalStyles'
import data from '../Assets/otherProjects.json'

export const OtherProjects = () => {
  return (
    <OtherWrapper primary>
      <OtherProjectsHeader>
        OTHER PROJECTS
      </OtherProjectsHeader>
      {data.map((item) => (
        <OtherProjectCard key={item.id}>
          <a
            href={item.netlify}
            target="_blank"
            rel="noreferrer"
            role="button">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
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
  padding-bottom: 20px;
`

const OtherProjectsHeader = styled.h2`
  color: #003333;
  margin-bottom: 10px;
  text-decoration: underline;
`

const OtherProjectCard = styled.div`
  margin-bottom: 10px;
  a {
    text-decoration: none;
    display: inline-block;
    color: black;
    margin-left: 2px;

    &:hover {
      text-decoration: underline;
    }

    h3 {
      margin-bottom: 0px;
    }
    p {
      margin-top: 5px;
    }

  }
`

const ProjectCodeContainer = styled.div`
  p {
    display: inline-block;
    background-color: #1C658C;
    margin: 0 5px 5px 0;
    padding: 5px;
    color: ${(props) => (props.primary ? '#003333' : 'white')};
    font-size: 10px;
  }
`