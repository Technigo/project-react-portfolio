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
              href="https://www.linkedin.com/feed/update/urn:li:activity:7038863071229988864/"
              target="_blank"
              rel="noreferrer"
              alt="bild">
              <img src="./Thumbnails/thoughts_thumbnail1.jpg" lang="eng" alt="GitHub project" />
              <DateTitle>MAR 2023</DateTitle>
              <BlogTitle>Certificate of Completion</BlogTitle>
              <BlogText>Like many of you, I&apos;m not that comfortable with this LinkedIn&#45;way 
                of expressing yourself. Though, I&apos;m up for a challenge.
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
              <img src="./Thumbnails/thoughts_thumbnail1.jpg" lang="eng" alt="GitHub project" />
              <DateTitle>JAN 2023</DateTitle>
              <BlogTitle>Boot Camp finalization</BlogTitle>
              <BlogText>Phew - I&apos;m done!
                It&apos;s hard to grasp it but now late January I&apos;m actually done.
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
  background-color: var(--white);
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
  color: var(--green);
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
  color: var(--orange);
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
  color: var(--green);
`;