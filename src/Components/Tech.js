/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, P } from '../Styled components/GlobalStyles'
import { WhitePinkH2 } from '../Styled components/HeadlineStyles'

const Tech = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <WhitePinkH2>TECH</WhitePinkH2>
        <P>
          HTML, CSS, Flexbox, CSS Grid, <Highlight>JavaScript,
          ES6, React</Highlight>, Web Accessibly, API:s, mob-programming,
          pair-programming, Github.
        </P>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Tech

const Highlight = styled.span`
  color: #FF7777;
`