import React from 'react'
import { OuterWrapper, InnerWrapper, P } from '../Styled components/GlobalStyles'
import { WhitePinkH2 } from '../Styled components/HeadlineStyles'

const Tech = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <WhitePinkH2>TECH</WhitePinkH2>
        <P>
          HTML, CSS, Flexbox, CSS Grid, JavaScript,
          ES6, React, Web Accessibly, API:s, mob-programming,
          pair-programming, Github.
        </P>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Tech