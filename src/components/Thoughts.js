import React from 'react';
import styled from 'styled-components';
import { FIRSTARTICLE_URL, SECONDARTICLE_URL } from 'utils/Urls';
import { Wrapper, SectionTitle, GridWrapper, MainText } from './GlobalStyles';

export const Thoughts = () => {
  return (
    <Wrapper>
      <SectionTitle>MY THOUGHTS</SectionTitle>
      <GridWrapper>
        <ArticleContainer>
          <a
            href={FIRSTARTICLE_URL}
            target="_blank"
            rel="noreferrer">
            <img src="images/medium1.jpg" alt="article" />
            <MainText>September 2022</MainText>
            <ArticleTitle>
            My Little Early Coding Journey
            </ArticleTitle>
            <MainText>
              A short journal about my early journey in coding world.
              Introduction of how I got into a coding bootcamp and
              why I wanted to give it a try.
            </MainText>
          </a>
        </ArticleContainer>
        <ArticleContainer>
          <a
            href={SECONDARTICLE_URL}
            target="_blank"
            rel="noreferrer">
            <img src="images/medium2.jpg" alt="article" />
            <MainText>October 2022</MainText>
            <ArticleTitle>
            Good Is Not Good Enough
            </ArticleTitle>
            <MainText>
              Do you have an acute
              imposter syndrome like me?
              Then this article is for you.
              It&apos;s about the feeling of being worse than I actually am
              and how I handle it.
            </MainText>
          </a>
        </ArticleContainer>
      </GridWrapper>
    </Wrapper>
  )
}

const ArticleContainer = styled.div`
  width: 90%;
  padding: 2%;
  margin-top: 5%;
  border-width: 3px;
  border-style: solid; 
  border-image: 
    linear-gradient(
      to top,
      #003333, 
      #648787,
      #648787, 
      white
    ) 1;
  
    &:hover{
        border-image: 
    linear-gradient(
      to bottom, 
      #003333,
      #648787,
      #648787,
      white
    ) 1;
  
    }
  a{
    text-decoration: none;
    color:#614124;
    margin-bottom: 10%; 
    display: flex;
    flex-direction: column;
    transition: transform .8s; 

    &:hover {
    transform: scale(0.95);
    }
}
  
  img{
    width: 100%;
    height: 200px;
    object-fit:cover;
    margin-bottom: 10px;
  }
`

const ArticleTitle = styled(SectionTitle)`   
  padding: 5px;
  font-size: 15px;
  margin: 10px 0;  
`