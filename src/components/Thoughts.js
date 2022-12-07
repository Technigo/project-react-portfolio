import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SiteSection, SectionTitle } from './global/GlobalStyling';
import { PolaroidTest } from './PolaroidThoughts'

export const Thoughts = () => {
  return (
    <OuterWrapper backgroundLightGrey>
      <InnerWrapper>
        <SiteSection>
          <SectionTitle>
            <p>My thoughts</p>
          </SectionTitle>
          <PolaroidTest />
          <ArticleContainer>
            <ThoughtArticle>
              <Date>Dec 6th 2022</Date>
              <a
                href="https://medium.com/@annika.gadman/the-power-of-teamwork-learning-in-groups-helps-me-accelerate-my-learning-e6107fc2c968"
                target="_blank"
                rel="noopener noreferrer">
                <h3>The Power of Teamwork: Learning in Groups Helps Me Accelerate My Learning</h3>
                <p>Remote courses are a great opportunity to develop skills —
                  like web development that I&apos;m interested in — while having the
                  freedom to study wherever and whenever I want. <span>&gt;&gt;&gt;</span>
                </p>
              </a>
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

  h3 {
    text-decoration: underline;
  }
  a {
    text-decoration: none;
    color: var(--color-text);
  }
  span {
    color: var(--color-text);
    font-weight: 700;
  }
`
const Date = styled.p`
  color: var(--color-mediumblue);
`