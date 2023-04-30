import React from 'react';
import styled from 'styled-components';

const FeaturedProjects = ({ projectImg, title, text, techLanguage, githubLink, liveLink }) => {
  return (
    <ProjectSection>
      <ProjectImg src={projectImg} alt='' />
      <Title><h1>{title}</h1></Title>
      <Text><p>{text}</p></Text>
      <TechLanguage>{techLanguage}</TechLanguage>
      <Button
        type="button"
        onClick={() => window.open(`${githubLink}`)}>
        View the code
      </Button>
      <Button
        type="button"
        onClick={() => window.open(`${liveLink}`) }>
        Live demo
      </Button>
    </ProjectSection>
  )
}

export default FeaturedProjects;

const ProjectSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
`
const ProjectImg = styled.img`
width: 327px;
height: 280px;
object-fit: cover;
margin-top: 60px;
`
const Title = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 32px;
`
const Text = styled.p`
font-family: 'EB Garamond';
font-size: 22px;
margin-bottom: 20px;
justify-content: center;
`
const TechLanguage = styled.div`
font-size: 16px;
line-height: 22px;
background-color: black;
color:white;
padding: 2px 6px;
`
const Button = styled.button`
display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 40px; 
   padding: 30px, 0px, 0px, 30px;
   color: rgb(0, 0, 0); 
   font-size: 20px;
   line-height: 27px;
   text-decoration: none;
   margin-bottom: 10px;
   width: 170px;
   height: 48px;
   margin-top: 10px;
   &:hover {
    background-color: #e593a8;
    color: white
}
`