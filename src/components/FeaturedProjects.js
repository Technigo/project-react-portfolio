import React from 'react';
import styled from 'styled-components';

const FeaturedProjects = () => {
    return (
        <ProjectSection>
            <ProjectImg src={projectImg} alt='' />
            <Title><h1>{title}</h1></Title>
            <Text><p>{text}</p></Text>
            <TechLanguage>{techlanguage}</TechLanguage>
            <Button></Button>
            <Button></Button>
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

