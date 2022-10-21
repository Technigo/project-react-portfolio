import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SectionTitle } from './global/GlobalStyling';

export const Thoughts = () => {
  const ThoughtsSection = styled.div`
    text-align: center;
    padding: 50px 0;
  `
  const ArticleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `
  const ThoughtArticle = styled.article`
    width: 100%;
    text-align: left;
  `
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ThoughtsSection>
          <SectionTitle>
            <p>My thoughts</p>
          </SectionTitle>
          <ArticleContainer>
            <ThoughtArticle>
              <p>Oct 2022</p>
              <h3>Why I started coding</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fuga, voluptates. Voluptatem praesentium ut quibusdam facilis dolore
                in quas sint temporibus amet, mollitia, exercitationem numquam?
                Sed omnis distinctio nisi odio deleniti.
              </p>
            </ThoughtArticle>
          </ArticleContainer>
        </ThoughtsSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}