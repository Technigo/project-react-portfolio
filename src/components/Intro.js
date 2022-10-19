/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import styled from 'styled-components/macro';
import { InnerWrapper, Text } from './MainStyle'

const Intro = () => {
  return (
    <IntroWrapper>
      <InnerWrapper>
        <Text tabIndex="0">
          <Line /><Dot />
     Hello and welcome! Since the middle of August I&apos;m a student at
     Technigo bootcamp, an intense and fun way to learn code. Before this
     career change I studied and then practiced in the field of social work
     with has giving me skills that can be valuable in the world of web
     development. A few skills are creativity, to think outside the box and
     be flexible.
        </Text>
      </InnerWrapper>
    </IntroWrapper>
  )
}

export default Intro

const IntroWrapper = styled.section`
    background-color: #f4f4f4;
    width: 100%;
    margin: 0;
    text-align: left;
    padding: 2rem 0;
`
const Line = styled.span` 
    border: 1px solid #4f6970;
    width: 40px;
    display: inline-block;
    margin-bottom: 4px;
    `
const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #4f6970;
    border-radius: 50%;
    display: inline-block;
    `
/* const IntroText = styled.p`
    margin-top: 5%;
  ` */