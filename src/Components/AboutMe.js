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
`

const Line = styled.span`
border: 1px solid #FA382F;
    width: 40px;
    display: inline-block;
    margin-bottom: 4px;
`

const Dot = styled.span`
height: 10px;
    width: 10px;
    background-color: #FA382F;
    border-radius: 50%;
    display: inline-block;
`

const AboutMe = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <BackgroundInfo>

          <p> <Line /> <Dot /> Hello! Im an aspiring frontend developer with 8 years of
        experience within office administration
        and with a degree in journalism, and a bachelors
        degree in culture. Autumn of 2021 I decided that
        I wanted to take my very mixed background into
        tech and started to learn how to code. My best soft
        skills are that Im paying a lot of attention to
        details and that Im ambitious.
          </p>
        </BackgroundInfo>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default AboutMe