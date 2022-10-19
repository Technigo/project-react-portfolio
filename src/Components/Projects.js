/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper, Title } from 'StyledComponents/GlobalComponents'

const MyProjects = styled.div`
background: #F4F4F4;
display: flex;
flex-direction: column;
align-items: center;
`

const TextContainerProjects = styled.h1`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    margin-left: 5%;
    margin-right: 5%;
`

const Tags = styled.div`
font-family: "Roboto", sans-serif;
  color: black;
  font-weight: bold;
  background-color: #FDDFE7;
  text-decoration: none;
  font-size: 12px; 
  line-height: 12px;
  padding: 4px;
  margin: 3px;
  border-radius: 5px;
`

const Projects = () => {
/*  const [projects, SetProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/CeciliaMichele/repos')
      .then((res) => res.json())
      .then((data) => SetProjects(data))
  }, []) */

  return (
    <OuterWrapper>
      <InnerWrapper>
        <MyProjects>
          <Title>Featured projects</Title>
          <TextContainerProjects>
            <Tags>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Pair-Programming</p>
              <p>API</p>
            </Tags>
          </TextContainerProjects>
        </MyProjects>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Projects