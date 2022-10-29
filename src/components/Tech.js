/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import styled from 'styled-components/macro'
import { HeadH4, InnerWrapper, SectionWrapper, HeadWrapper } from './styles/MainStyle'

const Tech = () => {
  return (
    <SectionWrapper>
      <InnerWrapper>
        <HeadWrapper>
          <HeadH4>Tech</HeadH4>
        </HeadWrapper>
        <TextWrapper>
          <p tabIndex="0">
     HTML, CSS, Flexbox, JavaScript, ES6, JSX, Styled-Components, React, React Hooks, Redux,
     Node.js, Mongo DB, Web Accessibly, API:s, Mob-Programming,
     Pair-Programming, GitHub.
          </p>
        </TextWrapper>
      </InnerWrapper>
    </SectionWrapper>
  )
}

export default Tech

const TextWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  justify-self: center;
`