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
grid-template-columns: 1fr 1fr;
justify-items: center; 


@media (min-width: 768px) {
  padding-right: 10em; 
  padding-left: 10em;
    
  }
  @media (min-width: 1024px) {
  padding-right: 15em; 
  padding-left: 15em;
    
  }

 `

const ArticleContainer = styled.div`
grid-column: 1 / 2 ;
display: grid; 
padding-top: 2em; 
`

const ArticleContainer2 = styled.div`
display: none; 
grid-column: 2 / 3 ; 
padding-top: 2em; 


@media (min-width: 768px) {
 display: grid; 
    
  }
  @media (min-width: 1024px) {
  padding-right: 15em; 
  padding-left: 15em;
    
  }`

const Img = styled.img`
height: 150px; 
width: 200px; `

const Article = () => {
  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>Thoughts about code</SectionHeader>
      </HeaderContainer>
      <ArticleContainer>
        <a
          href=""
          target="_blank"
          rel="noreferrer">
          <Img
            src="assets/article.jpg"
            alt="article" />
        </a>
        <div className="text-container">
          <p>October 2022</p>
          <h4> HEading</h4>
          <p> lorem lorem lorem lorem </p>
        </div>
      </ArticleContainer>

      <ArticleContainer2>
        <a
          href=""
          target="_blank"
          rel="noreferrer">
          <Img
            src="assets/article.jpg"
            alt="article" />
        </a>
        <div className="text-container">
          <p>October 2022</p>
          <h4> HEading</h4>
          <p> lorem lorem lorem lorem </p>
        </div>
      </ArticleContainer2>
    </Container>
  )
}
export default Article