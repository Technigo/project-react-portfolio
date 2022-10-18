import React from 'react'
import styled from 'styled-components'

const Container = styled.article`
display: grid; 
grid-template-columns:1fr 1fr 1fr 1fr 1fr; 
flex-direction: row;
justify-content: space-evenly; 
font-family:"Roboto", sans-serif;
gap: 10px; 
background-color: lightgrey; 

`
const HeaderContainer = styled.div`
  display: flex; 
  justify-content: center;
  grid-column: span 5; 
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
`

const TechList = () => {
  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>Skills</SectionHeader>
      </HeaderContainer>
      <Code>
        <h4 className="tech-heading">Code </h4>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
      </Code>

      <Toolbox>
        <h4 className="tech-heading">Toolbox </h4>
        <p>Figma</p>
        <p>GitHub</p>
      </Toolbox>

      <More>
        <h4 className="tech-heading">More </h4>
        <p>Project management</p>
        <p>Coustomer experince</p>
        <p>Event managment</p>
        <p>leadership</p>
        <p>Onboarding</p>
      </More>

      <Upcomming>
        <h4 className="tech-heading">Upcomming </h4>
        <p>Redux</p>
        <p>Back-end</p>
      </Upcomming>

    </Container>
  )
}
export default TechList