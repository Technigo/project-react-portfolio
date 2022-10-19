import React from 'react'
import styled from 'styled-components'
import { ContainerColored } from 'GlobalStyles'

const Container = styled(ContainerColored)`
justify-content: center;
text-align: center;
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