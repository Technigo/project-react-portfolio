import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
padding-right: 4em; 
padding-left: 4em; 
padding-top: 2em; 
padding-bottom: 2em; 
display: grid; 
grid-template-columns: 1fr 1fr 1fr; 

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
grid-column: span 4; 
`
const SectionHeader = styled.h2`
  text-align: center;
  background-color: rgb(185, 0, 91);
  font-size: 30px;
  text-transform: uppercase;
  color: white;
  padding:3px;
  font-family:'montserrat', sans-serif;
`
const HeaderContainer = styled.div`
  display: flex; 
  justify-content: center;
  grid-column: span 4; 
`

const TechInfo = () => {
  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>TECH</SectionHeader>
      </HeaderContainer>
      <Pitch>
        TechINFO
        lorem lorem lorem lorem loren mloren
        lorem lorem lorem lorem loren mloren
        lorem lorem lorem lorem loren mloren
      </Pitch>
    </Container>
  )
}

export default TechInfo