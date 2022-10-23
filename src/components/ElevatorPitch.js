import React from 'react';
import styled from 'styled-components';
import { ContainerColored, Pitch } from 'GlobalStyles';

const Line = styled.span`
  border: 1px solid rgb(185, 0, 91);
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
  `
const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: rgb(185, 0, 91);
  border-radius: 50%;
  display: inline-block;
  margin-left: -10px;
  margin-right:10px; 
  `

const ElevatorPitch = () => {
  return (
    <ContainerColored>
      <Pitch>
        <Line />
        <Dot />
        I want to work on improving the way people interact with websites, apps and other
         digital products.I`ve been working in customer service for years, and it`s given me a
         lot of experience with how people
        interact with websites, apps and other digital products.I`ve always wanted to combine
        my customer service
        experience with programming to create a more seamless customer journey.
      </Pitch>
    </ContainerColored>
  )
}

export default ElevatorPitch