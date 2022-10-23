/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import styled from 'styled-components/macro';
import { InnerWrapper, ClonedSectionWrapper } from './styles/MainStyle'

const Intro = () => {
  return (
    <ClonedSectionWrapper>
      <InnerWrapper>
        <p tabIndex="0">
          <Line /><Dot />
     Hello and welcome! Since the middle of August I&apos;m a student at
     Technigo bootcamp, an intense and fun way to learn code. Before this
     career change I studied and then practiced in the field of social work
     with has giving me skills that can be valuable in the world of web
     development. A few skills are creativity, to think outside the box and
     be flexible.
        </p>
      </InnerWrapper>
    </ClonedSectionWrapper>
  )
}

export default Intro

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