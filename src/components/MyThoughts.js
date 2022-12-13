import React from 'react';
import styled from 'styled-components';
import blogPic1 from './assets/blog-pic1.png';
import { OuterWrapper, InnerWrapper, MainHeading } from './GlobalStyles';

export const MyThoughts = () => {
  return (
    <OuterWrapper primary>
      <InnerWrapper>
        <MyThoughtsContainer>
          <MainHeading>MY THOUGHTS ABOUT CODE</MainHeading>
          <AllMyThoughtsCards>
            <div className="MyThoughtsCard">
              <a
                href="https://medium.com/@neah.rockstroh/fall-seven-times-get-up-eight-328abf5a9956"
                target="_blank"
                rel="noreferrer"
                alt="bild">
                <img src={blogPic1} lang="eng" alt="A desk with an open notebook and a screen on it." />
                <DateTitle>OCT 2022</DateTitle>
                <BlogTitle>Fall seven times, get up eight</BlogTitle>
                <BlogText>
                  I am currently eight weeks deep in the Frontend Developer Bootcamp at Techningo.
                  Eight weeks down and fourteen more to go.
                  I often end my days feeling drained and mentally exhausted.
                  This begs the question, how will I make it all the way? <EndingArrows>{'>>'}</EndingArrows>
                </BlogText>
              </a>
            </div>
            {/* template for other blog posts

            <div className="MyThoughtsCard">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                alt="bild">
                <img src={blogPic} lang="eng" alt="Github project" />
                <DateTitle>DEC 2022</DateTitle>
                <BlogTitle>Blog title</BlogTitle>
                <BlogText>Blog Text</BlogText>
                <EndingArrows>{'>>'}</EndingArrows>
              </a>
            </div> */}
          </AllMyThoughtsCards>
        </MyThoughtsContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export const MyThoughtsContainer = styled.section`
  width: 100%;
  height: 30%;
  position: relative;
  margin: 10%;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 668px) {
    display: flex;
  }
`;

/* sets the width for the blog post cards and for different media querys */

export const AllMyThoughtsCards = styled.div`
  position: relative;
  display: flex;
  flex-direction: center;
  justify-content: space-around;

  .MyThoughtsCard {
    width: 45%;
  }

  @media (max-width: 668px) {
   .MyThoughtsCard {
      width: 100%;
    }
  }
`;

/* Styles the titles and blog text */

export const DateTitle = styled.p`
font-size: 120%;
`;

export const BlogTitle = styled.p`
  font-weight: 700;
  font-size: 140%;
`;

export const BlogText = styled.p`
  font-size: 120%;
`;

export const EndingArrows = styled.p`
  color: #ff7b00;
   `;