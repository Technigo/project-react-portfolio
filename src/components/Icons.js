import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background: white;
padding-right: 4em; 
padding-left: 4em; 
padding-top: 2em; 
padding-bottom: 2em; 
display: block; 
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

const Icons = () => {
  return (
    <Container>
      <h1>test</h1>
    </Container>
  )
}
export default Icons