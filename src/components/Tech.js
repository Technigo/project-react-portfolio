import React from 'react'
import styled from 'styled-components/macro'
import { MainHeaders, InnerWrapper } from './globalStyling'

export const Tech = () => {
  return (
    <InnerWrapper>
      <MainHeaders>tech</MainHeaders>
      {// eslint-disable-next-line max-len
      }<TechContent> HTML, CSS, Flexbox, JavaScript ES6, JSX, React, React Hooks, Web accessibility, Redux, Node.js, Mongo DB, API:s, mob-programming, pair-programming, GitHub</TechContent>
    </InnerWrapper>

  )
}
export const TechContent = styled.p`
    text-align: center;
    `