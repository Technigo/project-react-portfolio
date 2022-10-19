import React from 'react'
import styled from 'styled-components'
import Github from './Icon/Github.svg'
import Linkedin from './Icon/Linkedin.svg'
import StackOverFlow from './Icon/StackOverFlow.svg'

const Container = styled.div`
background: white;
padding-right: 4em; 
padding-left: 4em; 
padding-top: 2em; 
padding-bottom: 2em; 
display: flex; 
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
/* const IconContainer = styled.div`
  display: flex;
    align-items: flex-end;
    position:absolute;
    top: 2.8rem;
    right: 1.2rem;
 `  */

/* const Img = styled.span`
color: black;
size: 150%;
` */

const Icons = () => {
  return (
    <Container>
      <div className="iconcontainer">
        <img src={Github} alt="logo github" />
        <h1>Github</h1>
      </div>
      <div className="iconcontainer">
        <img src={Linkedin} alt="logo github" />
        <p>LinkedIn</p>
      </div>
      <div className="iconcontainer">
        <img src={StackOverFlow} alt="logo github" />
        <p>StackOverFlow</p>
      </div>
    </Container>
  )
}
export default Icons