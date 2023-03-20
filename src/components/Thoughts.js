import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle, Tag } from './reusable/Wrappers';
import ThoughtsImg from '../images/blue.jpg';

export const Thoughts = () => {
  const ThoughtsSection = styled.div`
    display: inline-grid;
    justify-content: center;  
    width: 100%;
    padding: 50px 0;
    text-align: center;
    background-color: white;
  `;

  const ArticleWrapper = styled.article`
    width: 458px;
    padding: 10px;
    margin-top: 10px;
    text-align: start;
    color: grey;
    display: flex;
    flex-direction: column;
    h4 {
      margin: 3px 0px;
      text-transform: uppercase;
    }
    a {
      text-decoration: none;
      color: grey;
    }
    @media (max-width: 760px) {
      width: 350px;
    }
  `;

  const ArticleImg = styled.img`
    width: 320px;
    margin: 0 auto;
    @media (max-width: 760px) {
      width: 225px;
    }
  `;

  const Date = styled.h4`
    padding: 10px 0px 2px 0px;
    color: var(---highlight);
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>
        <ThoughtsSection>
          <SectionTitle>
            <p>my thoughts</p>
          </SectionTitle>
          <ArticleWrapper>
            <ArticleImg src={ThoughtsImg} />
            <a
              href="https://medium.com/@caroline.soderstrom/can-you-become-a-programmer-without-a-deep-technical-interest-368257cf05b4"
              target="_blank"
              rel="noopener noreferrer">
              <Date>October 2022</Date>
              <h4>Can you become a programmer without a deep technical interest?</h4>
              <p>
              In this short article I write about why got into tech
               and what I am looking for in my career as a developer
              </p>
            </a>
            <Tag>
              <p className="tag">Programming</p>
              <p className="tag">Career Change</p>
              <p className="tag">Customer Experience</p>
              {/* <p className="tag">Solving Problems</p> */}
            </Tag>
          </ArticleWrapper>
        </ThoughtsSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}