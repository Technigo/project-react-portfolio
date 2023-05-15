import React from 'react';
import styled from 'styled-components';
import ProjectList from 'components/ProjectList'
import Line from 'images/Line.png';

const FeaturedProjects = () => {
  return (
    <>
      <FeaturedHeader>
        <h1>
        Featured Projects
        </h1>
      </FeaturedHeader>
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
          <Buttons>
            <Button
              type="button"
              onClick={() => window.open(project.githubLink)}>
              <i className="fa-brands fa-github" />
        View code
            </Button>
            <Button
              type="button"
              onClick={() => window.open(project.liveLink)}>
              <i className="fa-regular fa-globe" />
        Live demo
            </Button>
          </Buttons>
          <LineImg src={Line} alt="" />
        </ProjectSection>
      ))}
    </>
  )
}

export default FeaturedProjects;

const FeaturedHeader = styled.h1`
font-family: 'Satoshi';
font-size: 30px;
margin: 20px;
@media (min-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: center;
}
`

const ProjectSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;

@media (min-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: center;
}
`
const ProjectImg = styled.img`
width: 327px;
height: 280px;
object-fit: cover;
margin-top: 30px;
margin-bottom: -30px;

@media (min-width: 768px) {
  width: 427px;
  height: 380px;
}
`
const Title = styled.h1`
font-family: 'Satoshi';
font-size: 19px;
margin-bottom: -70px;
`
const Text = styled.p`
font-family: 'EB Garamond';
font-size: 22px;
margin-bottom: -20px;
justify-content: center;

@media (min-width: 768px) {
  width: 400px;
}
`
const TechLanguage = styled.div`
display: flex;
flex-direction: row;
font-family: 'Satoshi';
font-size: 12px;
color:white;
gap: 5px;
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
background: #D6A9E2;
color: white;
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
const Buttons = styled.div`
@media (min-width: 768px) {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
`

const LineImg = styled.img`
height: 100%;
width: 300px;
margin-top: 50px;
align-self: center;
@media (min-width: 768px) {
  width: 800px;
}
`