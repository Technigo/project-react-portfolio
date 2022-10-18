import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding-right: 4em; 
padding-left: 4em; 
padding-top: 2em; 
padding-bottom: 2em; 
display: block; 
background: lightgrey; 
justify-content: center;
text-align: center;
@media (min-width: 768px) {
  padding-right: 10em; 
  padding-left: 10em;
  
    
  }
  @media (min-width: 1024px) {
  padding-right: 15em; 
  padding-left: 15em; }
 `
/*   const Contact = styled.div`
font-family:"Roboto", sans-serif;
grid-column: span 4;
` */

const Footer = () => {
  return (
    <Container>

      <h2>Contact</h2>
      <h2>Amanda Elvkull</h2>
      <h2>+47 411 13 072</h2>
      <h2>amanda.elvkull@gmail.com</h2>

    </Container>
  )
}
export default Footer