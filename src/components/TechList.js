import React from 'react'
import styled from 'styled-components'
import { Pitch } from 'GlobalStyles'

const Container = styled.article`
display: grid; 
grid-template-columns:1fr 1fr 1fr 1fr 1fr; 
flex-direction: row;
justify-content: space-evenly; 
font-family:"Roboto", sans-serif;
gap: 10px; 
background-color: rgba(240, 234, 237, 0.8); 
padding-bottom: 2em; 

`
const HeaderContainer = styled.div`
  display: flex; 
  justify-content: center;
  grid-column: span 5; 
  padding-top: 2em; 
  padding-bottom: 2em; 
`
const SectionHeader = styled.h2`
  text-align: center;
  background-color: rgb(185, 0, 91);
  font-size: 30px;
  text-transform: uppercase;
  color: white;
  padding:3px;
  font-family:'montserrat', sans-serif;`

const Code = styled.div`
flex-direction: column;
justify-content: flex-start;
text-align: center;
grid-column: 2 / 2 ; `

const Toolbox = styled.div`
flex-direction: column;
justify-content: flex-start;
text-align: center;
margin-right: 1.5rem;
grid-column: 3 / 3; `

const More = styled.div`
grid-column: 4 / 4;
text-align: center;
justify-content: center;
margin-left:0;

`
const Upcomming = styled.div`
grid-column: 2 / 3;
text-align: center;
padding-top: 2em; 
`
const Header = styled.h4`
font-family: "Roboto", sans-serif;`

const Text = styled(Pitch)`
margin: 0; `

const TechList = () => {
  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>Skills</SectionHeader>
      </HeaderContainer>
      <Code>
        <Header>Code </Header>
        <Text>HTML</Text>
        <Text>CSS</Text>
        <Text>JavaScript</Text>
        <Text>CSS</Text>
        <Text>JavaScript</Text>
        <Text>React</Text>
      </Code>

      <Toolbox>
        <Header>Toolbox </Header>
        <Text>Figma</Text>
        <Text>GitHub</Text>
      </Toolbox>

      <More>
        <Header>More </Header>
        <Text>Project management</Text>
        <Text>Coustomer experince</Text>
        <Text>Event managment</Text>
        <Text>leadership</Text>
        <Text>Onboarding</Text>
      </More>

      <Upcomming>
        <Header>Upcomming </Header>
        <Text>Redux</Text>
        <Text>Back-end</Text>
      </Upcomming>

    </Container>
  )
}
export default TechList