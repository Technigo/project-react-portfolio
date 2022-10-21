import React from 'react'
import styled from 'styled-components';
import thoughts from '../data/thoughts.json';

export const Thoughts = ({ color, backColor }) => {
  return (
    <OuterWrapper backColor={backColor}>
      <InnerWrapper>
        <SectionHeader color={color}>MY THOUGHTS</SectionHeader>
        <FeaturedThoughtWrapper>
          {thoughts.map((thought) => {
            return (
              <ThoughtCard
                key={thought.title}
                href={thought.url}
                target="_blank">
                <ThumbnailImage url={thought.image} />
                <BlogDate color={color}> {thought['date-description'].toUpperCase()}</BlogDate>
                <BlogTitle>{thought.title.toUpperCase()}</BlogTitle>
                <BlogInfo>{thought['thought-description']}<EndingArrows color={color}>{' >>'}</EndingArrows></BlogInfo>
              </ThoughtCard>
            );
          })}
        </FeaturedThoughtWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.section`
background-color: ${(props) => props.backColor};
`

const InnerWrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  max-width: 1100px;
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

const SectionHeader = styled.h2`
  background-color: ${(props) => props.color};
  color: white;
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  font-size: 22px;
  line-height: 1;
  padding: 5px 10px;
  margin: 20px 0 20px 0;
  line-height: 1;
`;

const FeaturedThoughtWrapper = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 100px;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 50px;
  }
`;

const ThoughtCard = styled.a`
  transform: translateY(0%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
  position: relative;
`;

const ThumbnailImage = styled.div`
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 26px;
  background-image: url(${(props) => props.url});
  }
`;

const BlogTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: black;
  font-size: 16px;

  ${ThoughtCard}:hover & {
    text-decoration: underline;
  }
`;

const BlogDate = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: ${(props) => props.color};
  font-size: 16px;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const BlogInfo = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: black;
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const EndingArrows = styled.span`
  font-size: 16px;
  color: ${(props) => props.color};
  display: inline;
`;