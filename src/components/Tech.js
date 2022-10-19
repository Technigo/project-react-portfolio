/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import styled from 'styled-components/macro'
import { Text, HeadH4, InnerWrapper, OuterWrapper } from './MainStyle'

const Tech = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <H4Wrapper>
          <HeadH4>Tech</HeadH4>
        </H4Wrapper>
        <Text tabIndex="0">
     HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux,
     Node.js, Mongo DB, Web Accessibly, API:s, mob-programming,
     pair-programming, Github.
        </Text>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Tech

const H4Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
