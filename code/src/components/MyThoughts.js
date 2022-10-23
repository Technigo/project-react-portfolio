import React from 'react'
import styled from 'styled-components';

import { ContainerWrapper, FlexWrapper, SectionWrapper, SectionHeadings } from 'GlobalStyles';

import { ARTICLE_URL } from 'data/Urls';
import MyThoughtsPic from '../images/doSomethingGreat.jpg';

// react component

export const MyThoughts = () => {
  return (
    <SectionWrapper>
      <ContainerWrapper>
        <FlexWrapper>
          <SectionHeadings>my thoughts</SectionHeadings>
          <AllMyThoughtsCards>
            <a
              href={ARTICLE_URL}
              target="_blank"
              rel="noreferrer"
              alt="bild">
              <img src={MyThoughtsPic} lang="eng" alt="Medium article" />
              <DateTitle>October 2022</DateTitle>
              <ArticleTitle>Making a mid-life career change and everything that goes with it…
              </ArticleTitle>
              <ArticleText>
                Some thoughts about changing my path.
                Atend a coding BootCamp and for 22weeks,
                not having any problems whatsoever knowing what you are doing
                in your spare time<b> &gt;&gt;</b>
              </ArticleText>
            </a>
          </AllMyThoughtsCards>
        </FlexWrapper>
      </ContainerWrapper>
    </SectionWrapper>

  )
}

// styled components

export const AllMyThoughtsCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 2%;
  margin-top: 5%;
  /* border: 2px solid hotpink; */

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit:cover;
    margin-bottom: 10px;
  }

  @media (min-width: 668px) {
     width: 50%;
  }  
`;

// ----------------

export const DateTitle = styled.p`
  color: var(--clr-medium);
`;

// ----------------

export const ArticleTitle = styled.p`
  font-weight: bold;
  overflow-wrap: break-word;
  font-size: 1.2rem;
  margin: 7px 0;
`;

// ----------------

export const ArticleText = styled.p`
  font-size: 0.8rem;
  font-family: var(--font-main);
  overflow-wrap: break-word;
  line-height: 1.2rem;
`;

// ----------------

export const EndingArrows = styled.p`
  font-size: 9px;
  color: #f44336;
`;
