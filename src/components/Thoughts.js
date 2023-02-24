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
              <DateTitle>OCT 2022</DateTitle>
              <BlogTitle>Though week</BlogTitle>
              <BlogText>This week has been really though.
                This really is a roller coaster. Right now I am in the valley of it.
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
              <DateTitle>OCT 2022</DateTitle>
              <BlogTitle>Smooth week</BlogTitle>
              <BlogText>This week has been really fun and smooth.
                As said before: It is a roller coaster. I am in the clouds now.
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
  color: rgb(10,37,37);
  font-size: 15px;
  font-weight: 700;
`;

export const BlogTitle = styled.p`
  font-weight: bold;
  color: var(--orange);
  font-size: 20px;
  font-weight: 700;
`;

export const BlogText = styled.p`
  font-family: Montserrat, sans-serif;
  color: rgb(135,47,0);
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
  color: rgb(10,37,37);
`;