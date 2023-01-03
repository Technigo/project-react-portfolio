/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, OuterWrapperGrey } from '../library/GlobalStyles'

export const Introduction = () => {
  return (
    <OuterWrapperGrey>
      <IntroductionWrapper>
        <Line /><Dot /> Frontend developer with the ambitions of going fullstack.
          Currently looking for a junior frontend position
          where I can join a great tech team where we can learn from each other.
      </IntroductionWrapper>
    </OuterWrapperGrey>
  )
}

const Line = styled.span`
  border: 1px solid #BA4581;
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
  background-color: #BA4581;
`

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #BA4581;
  border-radius: 50%;
  display: inline-block;
`

const IntroductionWrapper = styled(InnerWrapper)`
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  
  @media (min-width: 800px) {
    margin-top: 40px;
  }
  
`