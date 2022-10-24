import React from 'react';
import styled from 'styled-components';

export const Thoughts = () => {
  return (
    <ThoughtsOuterWrapper>
      <ThoughtsInnerWrapper>
        <h5>MY THOUGHTS</h5>
        <AllMyThoughtsCards>
          <ThoughtsCard>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              alt="bild">
              <img src="./Thumbnails/thoughts_thumbnail1.jpg" lang="eng" alt="Girhub project" />
              <DateTitle>DEC 2022</DateTitle>
              <BlogTitle>BLOG TITLE</BlogTitle>
              <BlogText>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </BlogText>
              <EndingArrows>{'>>'}</EndingArrows>
            </a>
          </ThoughtsCard>
          <ThoughtsCard>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              alt="bild">
              <img src="./Thumbnails/thoughts_thumbnail1.jpg" lang="eng" alt="Girhub project" />
              <DateTitle>DEC 2022</DateTitle>
              <BlogTitle>BLOG TITLE</BlogTitle>
              <BlogText>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </BlogText>
              <EndingArrows>{'>>'}</EndingArrows>
            </a>
          </ThoughtsCard>
        </AllMyThoughtsCards>
      </ThoughtsInnerWrapper>
    </ThoughtsOuterWrapper>
  );
};

export const ThoughtsOuterWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;
`;

export const ThoughtsInnerWrapper = styled.section`
  width: 80vw;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 50px;
`;

export const AllMyThoughtsCards = styled.div`
width: 100%;
text-align: left;
display: grid;
grid-template-columns: 1fr;
gap: 40px;
margin-top: 30px;

a {
  text-decoration: none;
}

@media (min-width: 668px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
`;

export const ThoughtsCard = styled.div`
  transform: translateY(0%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  p {
    font-family: ROBOTO, sans-serif;
  }
`;

export const DateTitle = styled.p`
  color: #D10000;
  font-size: 15px;
  font-weight: 700;
`;

export const BlogTitle = styled.p`
  font-weight: bold;
  color: var(--blue);
  font-size: 20px;
  font-weight: 700;
`;

export const BlogText = styled.p`
font-family: Montserrat, sans-serif;
color: #293a4f;
font-size: 16px;
line-height: 1.4;

@media (min-width: 668px) {
  font-size: 18px;
}

@media (min-width: 1024px) {
  font-size: 20px;
  line-height: 30px;
}

`;

export const EndingArrows = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: red;
`;
