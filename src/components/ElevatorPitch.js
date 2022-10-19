import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: rgba(240, 234, 237, 0.8);
  padding-right: 6em; 
  padding-left: 6em; 
  padding-top: 2em; 
  padding-bottom: 2em; 

  @media (min-width: 768px) {
  padding-right: 10em; 
  padding-left: 10em;
    
  }
  @media (min-width: 1024px) {
  padding-right: 15em; 
  padding-left: 15em;
    
  }
   `
const Pitch = styled.p`
  font-family:"Roboto", sans-serif;
  `
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
    <Container>
      <Pitch>
        <Line />
        <Dot />
        ELEVATORPITCH
        lorem lorem lorem lorem loren mloren
        lorem lorem lorem lorem loren mloren
        lorem lorem lorem lorem loren mloren
      </Pitch>
    </Container>
  )
}

export default ElevatorPitch