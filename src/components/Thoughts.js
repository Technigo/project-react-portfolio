import React from 'react';
import styled from 'styled-components/macro';
import blogPic from '../assets/blog-pic.png';
import { SectionHeading, InnerWrapper, OuterWrapper, GridWrapper } from '../library/GlobalStyles'

export const Thoughts = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>MY THOUGHTS</SectionHeading>
        <GridWrapper>
          <a
            href="https://medium.com/@linda_31582/my-first-encounter-with-mob-programming-5cb160db41b"
            target="_blank"
            rel="noreferrer"
            alt="bild">
            <img src={blogPic} lang="eng" alt="Girhub project" />
            <BlogDate>OCT 2022</BlogDate>
            <BlogTitle>My first encounter with mob programming</BlogTitle>
            <BlogText>Blogpost about my first mob programming project
               with my awesome team Hippo during Technigo Bootcamp <Span>{'>>'}</Span>
            </BlogText>
          </a>
        </GridWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

const Span = styled.span`
  color: var(--color-eggplantPink);
`;

const BlogDate = styled.p`
  color: var(--color-eggplantPink);
`;

const BlogTitle = styled.p`
  font-weight: bold;
`;

const BlogText = styled.p`
`;

