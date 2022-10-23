import React from 'react'
import styled from 'styled-components'
import { Heading } from './ComponentLibrary'
import PageSection from './PageSection'
import Wrapper from './Wrapper'

const TechText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    text-align: center;
    line-height: 1.6;
`

const Highlight = styled.span`
    color: var(--accent);
`

const Tech = () => {
  return (
    <PageSection>
      <Wrapper>
        <Heading>
          Tech
        </Heading>
        <TechText>
          HTML,
          CSS,
          Flexbox,
          Bootstrap,
          <Highlight> JavaScript ES6</Highlight>,
          JSX,
          <Highlight> React</Highlight>,
          <Highlight> React Hooks</Highlight>,
          <Highlight> Redux</Highlight>,
          Node.js,
          Mongo DB,
          Web Accessibility,
          API:s,
          pair-programming,
          Github.
        </TechText>
      </Wrapper>
    </PageSection>
  )
}

export default Tech