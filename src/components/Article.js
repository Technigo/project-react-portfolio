import React from 'react';
import styled from 'styled-components';
import { HeaderContainer, SectionHeader } from 'GlobalStyles';

const Container = styled.article`
background: white;
padding-right: 4em; 
padding-left: 4em; 
padding-top: 2em; 
padding-bottom: 2em; 
display: grid; 
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-content: center;  
 `

const ArticleContainer = styled.div`
grid-column: 2 / 2;
display: flex; 
padding-top: 2em; 
flex-direction: column; 

margin:auto; 
justify-content: center;
align-content: center; 
`

const ArticleContainer2 = styled.div`
display: none; 
grid-column: 2 / 3 ; 
padding-top: 2em;
flex-direction: column; 
padding-left: 2em;  
margin:auto; `

const Img = styled.img`
 width: 350px;
 height: auto;`

const Link = styled.a`
text-decoration: none;
color: black; `

const Text = styled.p`
font-family:"Roboto", sans-serif;
`
const TextContainer = styled.div`
display: flex; 
flex-direction: column;`

const Date = styled.p`
font-size: 15px;
color:rgb(185, 0, 91);`

const Heading = styled.p`
font-size: 20px; `

const Article = () => {
  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>Thoughts about code</SectionHeader>
      </HeaderContainer>
      <ArticleContainer>
        <Link
          href="https://medium.com/@amanda.elvkull/my-reflexions-after-8-weeks-of-web-developer-bootcamp-c966f132ceba"
          target="_blank"
          rel="noreferrer">
          <Img
            src="assets/article.jpg"
            alt="article" />
        </Link>
        <TextContainer>
          <Heading> My thougts after...</Heading>
          <Date>October 2022</Date>
          <Text> Here is a small reflexion about how it has been attending a boot camp.  </Text>
        </TextContainer>
      </ArticleContainer>

      <ArticleContainer2>
        <Link
          href=""
          target="_blank"
          rel="noreferrer">
          <Img
            src="assets/article.jpg"
            alt="article" />
        </Link>
        <TextContainer>
          <Heading> Stay tuned</Heading>
          <Date>October 2022</Date>
          <Text> for uppcoming articles from me ❤️ </Text>
        </TextContainer>
      </ArticleContainer2>
    </Container>
  )
}
export default Article
