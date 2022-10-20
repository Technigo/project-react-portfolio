import React from 'react';
import styled from 'styled-components';
import { FIRSTARTICLE_URL, SECONDARTICLE_URL } from 'utils/Urls';
import FirstMediumArticle from 'assets/medium1.jpg'
import SeconndMediumArticle from 'assets/medium2.jpg'

import { Wrapper, SectionTitle, GridWrapper, Paragraph } from './GlobalStyles';

export const Thoughts = () => {
  return (
    <Wrapper>
      <SectionTitle>MY THOUGHTS</SectionTitle>
      <GridWrapper>
        <ArticleStyle>
          <a
            href={FIRSTARTICLE_URL}
            target="_blank"
            rel="noreferrer">
            <img src={FirstMediumArticle} alt="article" />
            <ArticleText primary>September 2022</ArticleText>
            <ArticleTitle>
            My Little Early Coding Journey
            </ArticleTitle>
            <ArticleText primary>
            A short journal about my early journey in coding world.
            Introduction of how I got into a coding bootcamp and
            why I wanted to give it a try.
            </ArticleText>
          </a>
        </ArticleStyle>
        <ArticleStyle>
          <a
            href={SECONDARTICLE_URL}
            target="_blank"
            rel="noreferrer">
            <img src={SeconndMediumArticle} alt="article" />
            <ArticleText primary>October 2022</ArticleText>
            <ArticleTitle>
            Good Is Not Good Enough
            </ArticleTitle>
            <ArticleText primary>
                Do you have an acute
                imposter syndrome like me?
                Then this article is for you.
                It&apos;s about the feeling of being worse than I actually am
            and how I handle it.
            </ArticleText>
          </a>
        </ArticleStyle>
      </GridWrapper>
    </Wrapper>
  )
}

const ArticleStyle = styled.div`
width: 90%;
margin-top: 5%;
a{
    text-decoration: none;
    color:#614124;
    margin-bottom: 10%; 
    display: flex;
    flex-direction: column;

    &:hover {
        opacity: 40%;
        transition: opacity .5s; 
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

const ArticleText = styled(Paragraph)`
    line-height: 20px;
    margin: 0;
    
    @media (min-width: 520px) and (max-width: 1023px){
        font-size: 16px;
      }
      
      @media (min-width: 1024px){
        font-size: 18px;
      } 
`