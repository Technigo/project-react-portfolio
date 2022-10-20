import React from 'react';
import { Section, SectionTitle, TextWrapper, Wrapper, Span } from 'styledcomponents/Section';
import styled from 'styled-components/macro'

const Thoughts = () => {
  return (
    <Section primary>
      <SectionTitle>My THOUGHTS</SectionTitle>
      <Wrapper>
        <TextWrapper>
          <ImageWrapper>
            <ArticleImg src="" />
          </ImageWrapper>
          <ArticleWrapper>
            <Date>18 October</Date>
            <a
              href="https://medium.com/@ceciliafraanlund/8-things-i-wish-i-knew-before-starting-a-tech-boot-camp-cca7e03bf133"
              target="_blank"
              rel="noopener noreferrer">
              <h4>8 Things I wish I knew before starting a Tech Bootcamp  </h4>
              <p>
              This week I completed the second sprint and I am almost halfway through
              the program and I am not the same person who started this journey.
              Including the pre-project and intro days, I’ve been a
              coder for 10 weeks. <Span>&gt;&gt;</Span>
              </p>
            </a>
          </ArticleWrapper>
        </TextWrapper>
      </Wrapper>
    </Section>
  );
};

export default Thoughts;

const ArticleWrapper = styled.div`
border: 2px yellow solid;
padding: 5%;
  text-align: start;
  h4 {
    margin: 3px;
    text-transform: uppercase;
  }
  span {
    color: #c62a88;
    font-weight: 800;
  }
  a {
    text-decoration: none;
    color: black;
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
`
const ImageWrapper = styled.div`
display:flex;
`
const Date = styled.h4`
color: #c62a88;
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
