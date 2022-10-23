import React from 'react'
import styled from 'styled-components'
import { ContainerColored } from 'GlobalStyles'

const Container = styled(ContainerColored)`
justify-content: center;
text-align: center;
background-color: rgb(185, 0, 91); 
 `
const Contact = styled.h3`
font-family:"Roboto", sans-serif;
font-size: 10px; 
color: white; 
@media (min-width: 768px) {
font-size: 30px;
    
}
  
`

const Footer = () => {
  return (
    <Container>
      <Contact>Contact</Contact>
      <Contact>Amanda Elvkull</Contact>
      <Contact>+47 411 13 072</Contact>
      <Contact>amanda.elvkull@gmail.com</Contact>
    </Container>
  )
}
export default Footer