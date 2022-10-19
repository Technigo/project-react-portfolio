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
        ELEVATORPITCH
        lorem lorem lorem lorem loren mloren
        lorem lorem lorem lorem loren mloren
        lorem lorem lorem lorem loren mloren
      </Pitch>
    </ContainerColored>
  )
}

export default ElevatorPitch