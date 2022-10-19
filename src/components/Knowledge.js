import React from 'react'
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Heading } from './Styling'

export const Knowledge = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <KnowledgeContent>
          <Heading dark>TECH</Heading>
          <KnowledgeText>HTML, CSS, Flexbox, <OrangeText>JavaScript</OrangeText>, ES6,
            JSX,  <OrangeText>React, React Hooks, Redux,</OrangeText> Node.js, Mongo DB,
            Web Accessibly, API:s, mob-programming, pair-programming, Github.
          </KnowledgeText>
        </KnowledgeContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const KnowledgeContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

export const KnowledgeText = styled.p`
line-height: 30px;
font-family: 'Montserrat', sans-serif;
`
export const OrangeText = styled.span`
color: black;

@media (min-width: 1025px) {
color: #D36B00;
}
`