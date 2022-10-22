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

const SmallHeading = styled.h3`
font-size: 13px;
color:white;
margin-top:10px;
margin-bottom: 10px;
text-transform: uppercase;
font-family:"Roboto", sans-serif;
font-weight:bold;
@media (min-width:768px) {
 font-size: 25px; 
  
} 
@media (min-width:1024px) {
font-size: 30px; 
}
`

const MediumHeading = styled.h2`
font-size: 18px;
color:white;
margin-top:10px;
margin-bottom: 10px;
text-transform: uppercase;
font-family:'montserrat', sans-serif;
font-weight:bold;
@media (min-width:768px) {
 font-size: 30px; 
  
} 
@media (min-width:1024px) {
font-size: 35px; 
}`

const BigHeading = styled.h1`
  font-size: 25px;
  color:white;
  margin-top:10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-family:'montserrat', sans-serif;
  font-weight:bold;
  @media (min-width:768px) {
 font-size: 37px; 
  
} 
@media (min-width:1024px) {
font-size: 42px; 
}`

const Header = () => {
  return (
    <ContainerHero>
      <Img src="/assets/header.jpg" alt="of..." className="test" />
      <TextContainer>
        <SmallHeading>Portfolio: Amanda Elvkull</SmallHeading>
        <BigHeading>Frontend</BigHeading>
        <BigHeading>developer</BigHeading>
        <MediumHeading>+ CX expert</MediumHeading>
      </TextContainer>
    </ContainerHero>

  )
}

export default Header