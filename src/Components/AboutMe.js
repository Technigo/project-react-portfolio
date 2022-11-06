/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper } from 'StyledComponents/GlobalComponents'

const BackgroundInfo = styled.div`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    background: #F4F4F4;
    padding: 15px;
`

const Line = styled.span`
border: 1px solid #233126;
    width: 40px;
    display: inline-block;
    margin-bottom: 4px;
`

const Dot = styled.span`
height: 10px;
    width: 10px;
    background-color: #233126;
    border-radius: 50%;
    display: inline-block;
`

const AboutMe = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <BackgroundInfo>

          <p> <Line /><Dot /> Hello! I'm an aspiring frontend developer with 8 years of
        experience within office- and care administration.
        Autumn of 2021 I decided that I wanted to switch career into tech, and joined
        Technigos bootcamp in august 2022. I pay a lot of attention to details, and I also
        really like to socialize, which makes coding the perfect fit for me.
          </p>
        </BackgroundInfo>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default AboutMe