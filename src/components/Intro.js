import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper } from './Styling'
import startfigure from './images/startfigure.svg'

export const Intro = () => {
  return (
    <OuterWrapper beige>
      <InnerWrapper>
        <IntroContent>
          <img src={startfigure} alt="Intro figure" />
          <IntroText>One foot in the past and one in the future.
            I am a former conservator and curator who now has switched to Front end development.
            My aim is to build webpages that are accessible and easy to use.
          </IntroText>
        </IntroContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const IntroContent = styled.div`
display: block;

`
export const IntroText = styled.p`
font-family: 'Montserrat', sans-serif;
display: inline;
line-height: 30px;
margin: 10px
`