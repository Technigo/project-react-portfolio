import React from 'react'
import styled from 'styled-components/macro'
import { Heading, Wrapper } from './ComponentLibrary'
import PageSection from './PageSection'

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
          Bootstrap,
          Ant Design,
          <Highlight> JavaScript</Highlight>,
          JSX,
          <Highlight> React</Highlight>,
          <Highlight> React Hooks</Highlight>,
          <Highlight> Redux</Highlight>,
          Node.js,
          Express,
          swr,
          styled components,
          MongoDB,
          Web Accessibility,
          APIs,
          pair-programming.
        </TechText>
      </Wrapper>
    </PageSection>
  )
}

export default Tech