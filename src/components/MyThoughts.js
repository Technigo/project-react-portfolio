import React from 'react';
import styled from 'styled-components';
import blogPic from '../assets/blog-pic.png';

export const MyThoughts = () => {
  return (
    <MyThoughtsContainer>
      <MyThoughtsHeader>MY THOUGHTS ABOUT CODE</MyThoughtsHeader>
      <AllMyThoughtsCards>
        <div className="MyThoughtsCard">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            alt="bild">
            <img src={blogPic} lang="eng" alt="Girhub project" />
            <DateTitle>DEC 2022</DateTitle>
            <BlogTitle>Blog title</BlogTitle>
            <BlogText>Blog Text</BlogText>
            <EndingArrows>{'>>'}</EndingArrows>
          </a>
        </div>
        <div className="MyThoughtsCard">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            alt="bild">
            <img src={blogPic} lang="eng" alt="Girhub project" />
            <DateTitle>DEC 2022</DateTitle>
            <BlogTitle>Blog title</BlogTitle>
            <BlogText>Blog Text</BlogText>
            <EndingArrows>{'>>'}</EndingArrows>
          </a>
        </div>
      </AllMyThoughtsCards>
    </MyThoughtsContainer>
  );
};

export const MyThoughtsContainer = styled.section`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    display: flex;
  }
`;

export const MyThoughtsHeader = styled.h2`
  font-size: 48px;
  line-height: 1;
  background-color: #ff0000;
  color: whitesmoke;
  display: inline-block;
  padding: 10px 15px;
`;

export const AllMyThoughtsCards = styled.div`
  position: relative;
  display: flex;
  flex-direction: center;
  justify-content: space-around;

  .MyThoughtsCard {
  }
`;

export const DateTitle = styled.p`
  color: #ff0000;
`;

export const BlogTitle = styled.p`
  font-weight: bold;
`;

export const BlogText = styled.p`
  font-size: 10px;
`;

export const EndingArrows = styled.p`
  font-size: 9px;
  color: #f44336;
`;
