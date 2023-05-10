import React from 'react';
import styled from 'styled-components';
import ProjectList from 'components/ProjectList'

const FeaturedProjects = () => {
  return (
    <>
      {ProjectList.map((project) => (
        <ProjectSection>
          <ProjectImg src={project.projectImg} alt="" />
          <Title><h1>{project.title}</h1></Title>
          <Text><p>{project.text}</p></Text>
          <TechLanguage>
            {project.techLanguage.map((language) => (
              <h3>
                <span>
                  {language}
                </span>
              </h3>
            ))}
          </TechLanguage>
          <Button
            type="button"
            onClick={() => window.open(project.githubLink)}>
            <i className="fa-brands fa-github" />
        View the code
          </Button>
          <Button
            type="button"
            onClick={() => window.open(project.liveLink)}>
            <i className="fa-regular fa-globe" />
        Live demo
          </Button>
        </ProjectSection>
      ))}
    </>
  )
}

export default FeaturedProjects;

const ProjectSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
`
const ProjectImg = styled.img`
width: 327px;
height: 280px;
object-fit: cover;
margin-top: 60px;
margin-bottom: -30px;
`
const Title = styled.h1`
font-family: 'Satoshi';
font-size: 19px;
margin-bottom: -70px;
`
const Text = styled.p`
font-family: 'EB Garamond';
font-size: 22px;
margin-bottom: 10px;
justify-content: center;
`
const TechLanguage = styled.div`
display: flex;
flex-direction: row;
font-family: 'Satoshi';
font-size: 16px;
color:white;
gap: 10px;
span {
  background: black;
  padding: 2px 6px;
}
`
const Button = styled.button`
font-family: 'Satoshi';
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
border-radius: 40px;
border-style: none;
padding: 30px, 0px, 0px, 30px;
color: rgb(0, 0, 0); 
font-size: 18px;
line-height: 27px;
text-decoration: none;
margin-bottom: 10px;
width: 170px;
height: 48px;
margin-top: 10px;
&:hover {
background-color: rgb(214, 205, 140);
color: white
}
`