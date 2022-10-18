import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
width: 100%; 
height: 100%; 
position: relative;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

`;
const ContainerHero = styled.div`
display: flex; 
flex-direction: column;
min-width:320px;
height: 520px; 
position: relative;
background: rgba(156, 166, 197, 0.2);

@media (min-width:768px) {
  height: 682px; 
  
}

`
const TextContainer = styled.div`
display: flex; 
flex-direction: column;
margin-top: 200px; 
margin-left: 24px; 
position: absolute;
color: white;  

@media (min-width:768px) {
  margin-top: 300px; 
  margin-left: 150px; 
  
} 
@media (min-width:1024px) {
  margin-top: 300px; 
  margin-left: 100px; 
}
`

const Header = () => {
  return (
    <ContainerHero>
      <Img src="/assets/header.jpg" alt="of..." className="test" />
      <TextContainer>
        <h3 className="small-heading">Portfolio</h3>
        <h1 className="big-heading">Amanda Elvkull</h1>
        <h2 className="medium-heading">Web developer</h2>
      </TextContainer>
    </ContainerHero>

  )
}

export default Header