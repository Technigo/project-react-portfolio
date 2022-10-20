import React, { useState } from 'react';
import styled from 'styled-components';
import { ContainerColored, HeaderContainer, SectionHeader, TagWrapper, TagWrapperText } from 'GlobalStyles';

/* ---------- Styled components ----------- */

const Link = styled.a`
font-family:"Roboto", sans-serif;

 `
const List = styled.div`
display: grid; 
grid-column: 1 / 2; 
display: flex; 
flex-direction:column; 
`
const Icons = styled.span`
color: orange; `

const ProjectList = () => {
  /*  -----------------Calling API----------------- */

  const [projects, setProjects] = useState([])

  const options = {
    method: 'GET',
    headers: {
      Authorization: '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'
    }
  }

  fetch('https://api.github.com/users/AmandaElvkull/repos', options)
    .then((Response) => Response.json())
    .then((json) => setProjects(json))
    .catch((error) => alert(error, 'error'))

  return (
    <ContainerColored>
      <HeaderContainer>
        <SectionHeader>Other Projects</SectionHeader>
      </HeaderContainer>
      {/*   First filter the array in the API and then only fetch those it's
      true as forked, only show after 4 projects and then map  */}
      {projects.filter((project) => project.fork === true).slice(4, 8).map((project) => (
        <List key={project.id}>
          <Link
            href={project.html_url}
            target="_blank"
            rel="noreferrer">
            {project.name}
          </Link>
          <Icons>&gt;&gt;</Icons>
          <TagWrapper>
            <TagWrapperText>HTML5</TagWrapperText>
            <TagWrapperText>CSS3</TagWrapperText>
            <TagWrapperText>JavaScript ES6
            </TagWrapperText>
            <TagWrapperText>React
            </TagWrapperText>
          </TagWrapper>
        </List>
      ))}

    </ContainerColored>
  )
}
export default ProjectList