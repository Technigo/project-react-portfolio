import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from 'GlobalStyles';

const Container = styled.article`
background: white;
padding-right: 4em; 
padding-left: 4em; 
padding-top: 2em; 
padding-bottom: 2em; 
display: grid; 
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
justify-content: center;
align-content: center;  
 `

const ArticleContainer = styled.div`
grid-column: 3 / 3;
display: flex; 
padding-top: 2em; 
flex-direction: column; 
justify-content: center;
align-content: center; 
`

const ArticleContainer2 = styled.div`
display: none; 
grid-column: 2 / 3 ; 
padding-top: 2em;
flex-direction: column; 
padding-left: 2em; 
 `

const Img = styled.img`
 width: 500px;
height: 100%; `

const Link = styled.a`
text-decoration: none;
color: black; `

const Text = styled.p`
font-family:"Roboto", sans-serif;
`
const TextContainer = styled.div`
display: flex; 
flex-direction: column;
 `

const Date = styled.p`
font-size: 15px;
color:rgb(185, 0, 91);
margin: 0;
font-weight: bold;  `

const Heading = styled.p`
font-size: 20px; `

const HeaderContainer = styled.div`
 display: flex; 
justify-content: center; 
grid-column: span 5 ; 
padding-bottom: 2em; `

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
          {/* <Heading> My thougts after...</Heading> */}
          <Date>OCTOBER 2022</Date>
          <Text> A short article about my thoughts after 8 weeks fo web developer bootcamp.  </Text>
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
