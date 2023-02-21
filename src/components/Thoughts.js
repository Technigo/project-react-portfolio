import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, TextWrapper, Wrapper, Span } from './Section';
import ArticleMockup from '../images/finished.png'

const Thoughts = () => {
  return (
    <ThoughtsSection>
      <SectionTitle>My THOUGHTS</SectionTitle>
      <Wrapper>
        <TextWrapper>
          <ImageWrapper>
            <ArticleImg src={ArticleMockup} />
          </ImageWrapper>
          <ArticleWrapper>
            <Date>21 February 2023</Date>
            <a
              href="https://medium.com/@ceciliafraanlund/confessions-of-a-good-girl-ff3babcbb2ca"
              target="_blank"
              rel="noopener noreferrer">
              <h4> Final Project and performance anxiety</h4>
              <p>
              With less than four weeks left of of this final sprint,
              it´s time to think about the final project. In fact, I have 10
              days to come up with a fullstack project <Span>&gt;&gt;</Span>
              </p>
            </a>
            <Date>16 October 2022</Date>
            <a
              href="https://medium.com/@ceciliafraanlund/8-things-i-wish-i-knew-before-starting-a-tech-boot-camp-cca7e03bf133"
              target="_blank"
              rel="noopener noreferrer">
              <h4>8 Things I wish I knew before starting a Tech Bootcamp  </h4>
              <p>
              This week I completed the second sprint and I am almost halfway through
              the program and I am not the same person who started this
              journey <Span>&gt;&gt;</Span>
              </p>
            </a>
          </ArticleWrapper>
        </TextWrapper>
      </Wrapper>
    </ThoughtsSection>
  );
};

export default Thoughts;

const ThoughtsSection = styled(Section)`
background-color: var(--darkChocolate);
`

const ArticleWrapper = styled.div`
padding: 5%;
  text-align: start;
  h4 {
    margin: 3px;
    text-transform: uppercase;
  }
  span {
    color: var(--lightMudSlide);
    font-weight: 800;
  }
  a {
    text-decoration: none;
    color: white;
  }

  p {
    margin-top: 3px;
  }

@media (min-width: 900px) {
padding-top: 5%;
padding-left: 15%;
padding-right: 15%;
h4{
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
color: var(--lightMudSlide);
text-transform: uppercase;
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
