import React, { useState } from 'react';
import styled from 'styled-components';

/* ---------- Styled components ----------- */
const Container = styled.section`
background: Lightgrey;
padding-right: 4em; 
padding-left: 4em; 
padding-top: 2em; 
padding-bottom: 2em; 
display: grid; 
grid-template-columns: 1fr 1fr 1fr; 

@media (min-width: 768px) {
  padding-right: 10em; 
  padding-left: 10em;
    
  }
  @media (min-width: 1024px) {
  padding-right: 15em; 
  padding-left: 15em;
    
  }
  
   `
const SectionHeader = styled.h2`
color:white;
text-align: center; 
padding: 3px; 
grid-column: 2 / 2;`

const Link = styled.a`
font-family:"Roboto", sans-serif;

 `

const List = styled.div`
display: grid; 
grid-column: 1 / 2; 
display: flex; 
flex-direction:column; 
`
const TagWrapper = styled.div`
display: flex;`

const Icons = styled.span`
color: orange; `

const TagWrapperText = styled.p`
 font-family: "Roboto", sans-serif;
    color: white;
    font-weight: bold;
    background-color: rgb(185, 0, 91);
    text-decoration: none;
    text-align: center;
    font-size: 12px; 
    line-height: 12px;
    padding: 4px;
    margin: 3px;
    border-radius: 5px;
`
const HeaderContainer = styled.div`
  display: flex; 
  justify-content: center;
  grid-column: span 5; 
`

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
    <Container>
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
            <TagWrapperText>HTML5{/* </p> */}
              {/* <p> */}CSS3{/* </p> */}
              {/* <p> */}JavaScript ES6
            </TagWrapperText>
          </TagWrapper>
        </List>
      ))}

    </Container>
  )
}
export default ProjectList