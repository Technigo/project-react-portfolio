import React from 'react';
import styled from 'styled-components';
import { SectionHeader, OuterWrapper } from './GlobalStyleComponents';
import Lightbulb from './images/Lightbulb.jpg'
import Drumroll from './images/Drumroll.jpg'

export const MyThoughts2 = ({ color }) => {
  return (
    <OuterWrapper>
      <Wrapper>
        <SectionHeader color={color}>MY THOUGHTS</SectionHeader>
        <AllMyThoughtsWrapper>
          <AllMyThoughtsCards>
            <div className="MyThoughtsCard">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                alt="bild">
                <ThoughtsImage src={Lightbulb} lang="eng" alt="Girhub project" />
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
                <ThoughtsImage src={Drumroll} lang="eng" alt="Girhub project" />
                <DateTitle>DEC 2022</DateTitle>
                <BlogTitle>Blog title</BlogTitle>
                <BlogText>Blog Text</BlogText>
                <EndingArrows>{'>>'}</EndingArrows>
              </a>
            </div>
          </AllMyThoughtsCards>
        </AllMyThoughtsWrapper>
      </Wrapper>
    </OuterWrapper>
  );
};

/* const MyThoughtsContainer = styled.section`
    width: 80%;
    height: 300px;
    position: relative;
    margin: 10%;
    display: flex;
    flex-direction: column;

    @media (min-width: 668px) {
      display: flex;
    }
  `; */

const ThoughtsImage = styled.img`
background-size: cover;
background-position: center;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const AllMyThoughtsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%
`;

const AllMyThoughtsCards = styled.div`
text-align: left;
display: flex;
flex-direction: row;


@media (max-width: 800px) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 50px;
}
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const DateTitle = styled.p`
    color: #ff0000;
  `;

const BlogTitle = styled.p`
    font-weight: bold;
  `;

const BlogText = styled.p`
    font-size: 10px;
  `;

const EndingArrows = styled.p`
    font-size: 9px;
    color: #f44336;
  `;
