import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
background: white;
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
    
  }`

const SectionHeader = styled.h2`
  text-align: center;
  background-color: rgb(185, 0, 91);
  font-size: 30px;
  text-transform: uppercase;
  color: white;
  padding:3px;
  font-family:'montserrat', sans-serif;
  grid-column: 2 / 2;`

const Link = styled.a`
font-family:"Roboto", sans-serif;
display: flex; 
flex-direction:column; 
grid-column:2 / 2; 
text-decoration:none;`

const List = styled.div`
display: grid; 
grid-column: 1 / 2; `

const ArticletList = () => {
  return (
    <Container>
      <SectionHeader>More thoughts</SectionHeader>
      <List>
        <Link
          href=""
          target="_blank"
          rel="noreferrer">
          read more here
        </Link>
      </List>

    </Container>
  )
}
export default ArticletList