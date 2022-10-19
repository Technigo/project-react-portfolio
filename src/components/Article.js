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

@media (min-width: 768px) {
  padding-right: 10em; 
  padding-left: 10em;
    
  }
  @media (min-width: 1024px) {
  padding-right: 15em; 
  padding-left: 15em;
    
  }

 `

/* const SmallContainer = styled.div`
display: grid;
grid-column: span 3;
` */
const ArticleContainer = styled.div`
grid-column: 1 / 2 ;
padding-left: 4em; 
display: block;  `

const ArticleContainer2 = styled.div`
display: none; 
grid-column: 2 / 3 ; 
@media (min-width: 768px) {
 display: grid; 
    
  }
  @media (min-width: 1024px) {
  padding-right: 15em; 
  padding-left: 15em;
    
  }`

const Article = () => {
  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>Thoughts about code</SectionHeader>
      </HeaderContainer>
      {/* <SmallContainer> */}
      <ArticleContainer>
        <a
          href=""
          target="_blank"
          rel="noreferrer">
          <img
            src=""
            alt="hello" />
        </a>
        <div className="overlay">
          <p className="overlay-text">
                Heding
          </p>

        </div>
        <div className="text-container">
          <h4> HEading</h4>
          <p>October 2022</p>
          <p> lorem lorem lorem lorem </p>
          <p> wrapper</p>
        </div>
      </ArticleContainer>

      <ArticleContainer2>
        <a
          href=""
          target="_blank"
          rel="noreferrer">
          <img
            src=""
            alt="hello" />
        </a>
        <div className="overlay">
          <p className="overlay-text">
                Heding
          </p>

        </div>
        <div className="text-container">
          <h4> HEading</h4>
          <p>October 2022</p>
          <p> lorem lorem lorem lorem </p>
          <p> wrapper</p>
        </div>
      </ArticleContainer2>
      {/* </SmallContainer> */}
    </Container>
  )
}
export default Article