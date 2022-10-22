
import React from 'react';
import styled from 'styled-components';
import { ContainerColored, /*  SectionHeader, */ TagWrapper, TagWrapperText } from 'GlobalStyles';
import data from 'data.json'

const Container = styled(ContainerColored)`
display: grid; 
grid-template-columns: 1fr 1fr;
justify-content: center;
align-content: center;
gap: 30px; 
`

const ProjectContainer = styled.div`
    margin: auto;

`

const Img = styled.img`
 width: 350px;
 height: auto;
`
const ImageContainer = styled.div`
position: relative;
`

const TitleOverlay = styled.div`
position: absolute;
display: none;
justify-content: center;
align-items: center;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #60183575;
font-size: 28px;
font-family: "Montserrat", sans-serif;
text-transform: uppercase;
color: black; 

${ImageContainer}:hover & {
  display:flex; 
}
`
const Link = styled.a`
 text-decoration: none;
 color: black; `

const ProjectTitle = styled.h5`
font-family:"Montserrat", sans-serif;
font-size: 20px; 
 `
const Description = styled.p`
font-family:"Roboto", sans-serif;
text-decoration:none;`

/* const HeaderContainer = styled.div`

justify-content: center;
grid-column: span 3 ; ` */

const Projects = () => {
  return (
    <Container>
      {data.slice(0, 4).map((project) => (
        <ProjectContainer key={project.id}>
          <Link href={project.url} target="_blank" rel="noreferrer">
            <ImageContainer>
              <Img src={project.img_src} alt="project" />
              <TitleOverlay>{project.title}</TitleOverlay>
            </ImageContainer>
            <ProjectTitle>{project.title}</ProjectTitle>
          </Link>
          <Description>{project.description} <Link href={project.url_netlify}> x </Link>
          </Description>

          <TagWrapper>
            {project.tags.map((tag) => (
              <TagWrapperText key={tag.id}>{tag.tech}</TagWrapperText>
            ))}
          </TagWrapper>
        </ProjectContainer>
      ))}
    </Container>

  )
}
export default Projects
