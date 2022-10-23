import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle } from './reusable/Wrappers';
import ThoughtsImg from '../images/Yellow.png';

export const Thoughts = () => {
  const ThoughtsSection = styled.div`
    display: inline-grid;
    width: 100%;
    justify-content: center;  
    text-align: center;
    padding: 50px 0;
    background-color: white;
  `;
  const ArticleWrapper = styled.article`
    width: 515px;
    color: #fcfaf88a;
    text-align: start;
    padding 10px;
    margin-top: 30px;
    h4 {
      margin: 3px;
      text-transform: uppercase;
    }
    a {
      text-decoration: none;
      color: #c8aa89c6;
    }
  `;
  const ArticleImg = styled.img`
    width: 490px;
    margin: 0 auto;
  `;
  const Date = styled.h4`
    color: var(---highlight);
    padding: 20px 0px 5px 0px;
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
                and my love for solving problems for people
              </p>
            </a>
          </ArticleWrapper>
        </ThoughtsSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}