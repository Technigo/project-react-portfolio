import React from 'react'
import styled from 'styled-components/macro'
import { MainHeaders, InnerWrapper, SingleTag } from './globalStyling'

export const Thoughts = () => {
  return (
    <InnerWrapper>
      <MainHeaders>my thoughts</MainHeaders>
      <StyledArticle>
        <a href="https://medium.com/@linnea.ajger/learning-new-things-4be662bc7c70">
          <img src="https://miro.medium.com/max/1400/1*EQNmkL_KRFVvj1Tor0TeqQ.jpeg" alt="blogpost" />
          <h5>OCT 2022</h5>
          <h4>Learning new things</h4>
          {// eslint-disable-next-line max-len
          }          <p>...is a rollercoaster. Read about my thoughts from the first 3 months in the Technigo Web Developer Bootcamp <span> &gt;&gt;</span></p>
          <SingleTag>blog post</SingleTag>
        </a>
      </StyledArticle>
    </InnerWrapper>

  )
}

export const StyledArticle = styled.article`
    padding: 30px;
    border-radius: 30px;
    background: #a0bcb8;

  img { 
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h4 {
    font-weight: 700;
    text-transform: uppercase;
    color: #2f694d;
    margin: 0.5rem 0rem;  }

  h5  {
   font-size: 1.0rem; 
  }

  span {
  color:#2f694d;
  font-weight: 700;
}
`

