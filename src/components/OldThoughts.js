import React from 'react';
import styled from 'styled-components';
import blogPic from '../assets/blog-pic.svg';

export const Thoughts = () => {
  return (
    <ThoughtsCard>
      <img src={blogPic} alt="bild" />
      <DateTitle>DEC 2022</DateTitle>
      <BlogTitle>Blog title</BlogTitle>
      <BlogText>Blog Text</BlogText>
      <EndingArrows>{'>>'}</EndingArrows>
    </ThoughtsCard>
  );
};

export const ThoughtsCard = styled.div`
  margin: 2%;
  padding: 2%;

  img {
    width: 100%;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
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
