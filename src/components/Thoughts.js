import React from 'react';
import styled from 'styled-components/macro';
import blogPic from '../assets/hannah-busing-unsplash.jpg';
import { SectionHeading, InnerWrapper, OuterWrapper, Span } from '../library/GlobalStyles'

export const Thoughts = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>MY THOUGHTS</SectionHeading>
        <ThoughtsWrapper>
          <a
            href="https://medium.com/@linda_31582/my-first-encounter-with-mob-programming-5cb160db41b"
            target="_blank"
            rel="noreferrer"
            alt="bild">
            <ImgWrapper>
              <img src={blogPic} alt="Hands holding" />
            </ImgWrapper>
            <BlogDate>OCT 2022</BlogDate>

            <BlogTitle>My first encounter with mob programming</BlogTitle>
            <BlogText>Blogpost about my first mob programming project
               with my awesome team Hippo during Technigo Bootcamp <Span>{'>>'}</Span>
            </BlogText>
          </a>
        </ThoughtsWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

const BlogDate = styled.p`
  color: var(--color-eggplantPink);
`;

const BlogTitle = styled.p`
  font-weight: bold;
`;

const BlogText = styled.p`
`;

const ThoughtsWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: left;

  img {
    height: 250px;
  }
`;

const ImgWrapper = styled.div`
  display: flex; 
  justify-content: center; 
`;