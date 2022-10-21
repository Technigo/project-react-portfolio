/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import styled from 'styled-components/macro'
import { HeadH4, InnerWrapper, SectionWrapper } from './MainStyle'

const Tech = () => {
  return (
    <SectionWrapper>
      <InnerWrapper>
        <HeadWrapper>
          <HeadH4>Tech</HeadH4>
        </HeadWrapper>
        <TextWrapper>
          <p tabIndex="0">
     HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux,
     Node.js, Mongo DB, Web Accessibly, API:s, mob-programming,
     pair-programming, Github.
          </p>
        </TextWrapper>
      </InnerWrapper>
    </SectionWrapper>
  )
}

export default Tech

export const HeadWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const TextWrapper = styled.div`
text-align: center;
display: flex;
justify-content: center;
justify-self: center;
 
`