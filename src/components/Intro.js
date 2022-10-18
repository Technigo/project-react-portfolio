import React from 'react'
import styled from 'styled-components'
import startfigure from './images/startfigure.svg'

export const Intro = () => {
  return (
    <InnerWrapper>
      <IntroContent>
        <img src={startfigure} alt="Intro figure" />
        <IntroText>One foot in the past and one in the future.
          I am a former conservator and curator who now has switched to Front end development.
          My aim is to build webpages that are accessible and easy to use.
        </IntroText>
      </IntroContent>
    </InnerWrapper>
  )
}

export const InnerWrapper = styled.section`
width: 90%;
@media (min-width: 1025px) {
  width: 70%;
}
`

export const IntroContent = styled.div`
display: block;
line-height: 30px;
padding: 40px 0px;
`
export const IntroText = styled.p`
display: inline;
margin: 10px
`