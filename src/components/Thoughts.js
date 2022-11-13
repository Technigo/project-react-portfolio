import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SiteSection, SectionTitle } from './global/GlobalStyling';

export const Thoughts = () => {
  return (
    <OuterWrapper backgroundLightGrey>
      <InnerWrapper>
        <SiteSection>
          <SectionTitle>
            <p>My thoughts</p>
          </SectionTitle>
          <ArticleContainer>
            <ThoughtArticle>
              <Date>Oct 2022</Date>
              <h3>Why I started coding</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fuga, voluptates. Voluptatem praesentium ut quibusdam facilis dolore
                in quas sint temporibus amet, mollitia, exercitationem numquam?
                Sed omnis distinctio nisi odio deleniti.
              </p>
            </ThoughtArticle>
          </ArticleContainer>
        </SiteSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const ThoughtArticle = styled.article`
  width: 100%;
  text-align: left;
`
const Date = styled.p`
  color: var(--color-mediumblue);
`