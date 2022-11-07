import React from 'react'
import styled from 'styled-components/macro'
import { InnerWrapper, MainHeaders, OuterWrapper } from './globalStyling'

export const Tech = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <MainHeaders>tech</MainHeaders>
        {// eslint-disable-next-line max-len
        }<TechContent> HTML • CSS • Flexbox • JavaScript ES6 • JSX • React • React Hooks • Web accessibility • Redux • Node.js • Mongo DB • API:s • Mob-programming • Pair-programming • GitHub</TechContent>
      </InnerWrapper>
    </OuterWrapper>

  )
}
export const TechContent = styled.p`
    text-align: center;
    `