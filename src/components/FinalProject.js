import React from 'react';
import styled from 'styled-components';
import { Section, TextWrapper, Wrapper } from './Section';

const FinalProject = () => {
  return (
    <ThoughtsSection>
      <Wrapper>
        <TextWrapper>
          <ImageWrapper>
            <ArticleImg src="https://i.imgur.com/grBEPfx.png" />
          </ImageWrapper>
          <FinalProjects>Final project</FinalProjects>
          <Wrap>
            <FinalProjectDesc>Finally, a digital card game for the mentally unstable
            generation - get a gripp. offers a truly dark experience to share with
             your friends, coworkers and family. They’re probably worse off than you are.
             Gripp is a party ice-breaker game coming in early 2023.
            </FinalProjectDesc>
          </Wrap>
          <ArticleWrapper>
            <Date>12 December</Date>
            <h3>Final Project Sprint starts! Start building backend and constructing JSON files.
            </h3>
            <Date>30 November</Date>
            <h3> Sent in the new pitch with more elaborated backend-stages, approved!</h3>
            <Date>23 November</Date>
            <h3>Pitched Final Project idea, got the feedback that the project
                is backend-heavy and needed to redo the backend stages.
            </h3>
          </ArticleWrapper>

        </TextWrapper>
      </Wrapper>
    </ThoughtsSection>
  );
}

export default FinalProject;

const FinalProjects = styled.h2`
color: white;
line-height: 0rem;
`

const Wrap = styled.div`
display: grid; 
place-items: center;
`
const FinalProjectDesc = styled.h3`
color: white;
font-weight: 300;
text-align: center;
width: 90%;
@media (min-width: 1200px) {
width: 80%;
}`
const ThoughtsSection = styled(Section)`
background-color: #190E0A;
text-align: center;
`
const ArticleWrapper = styled.div`
  h3 {
    margin: 10px;
    color: white;
    font-weight: 300;
  }

@media (min-width: 900px) {
h3{
    font-size: 1.5rem;
}
p{
    font-size: 1.2rem;
}
  }
`;

const ImageWrapper = styled.div`
display:flex;
`;
const Date = styled.h4`
color: #C5FF0B;
text-transform: uppercase;
font-weight: 600;
font-size: 1.2rem;
margin: 10px;
`;

const ArticleImg = styled.img`
  width: 100%;
  margin: 0 auto;
@media (min-width: 900px) {
    width: 80%;
}
@media (min-width: 1600px) {
    width: 70%;
}`;