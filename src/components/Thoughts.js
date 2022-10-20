import React from 'react'
import styled from 'styled-components';
import thoughts from '../data/thoughts.json';

export const Thoughts = ({ color }) => {
  return (
    <Wrapper>
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
              <BlogInfo>{thought['thought-description']}<EndingArrows>{'>>'}</EndingArrows></BlogInfo>
            </ThoughtCard>
          );
        })}
      </FeaturedThoughtWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  color: whitesmoke;
  display: inline-block;
  padding: 4px;
  margin: 20px 0 20px 0;
  font-weight: bold;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 1;
    padding: 10px 15px;
    margin-bottom: 40px;
  }
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

  /* Optional hover effect, delete if not desired */
  /* &:hover {
    transform: translateY(-1%);
    transition: transform 0.3s;
  } */
`;

const ThumbnailImage = styled.div`
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 26px;
  background-image: linear-gradient(180deg, #1c232580, #1c232580),
    url(${(props) => props.url});
  &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  }
`;

const BlogTitle = styled.h2`
  font-family: "Montserrat Bold";
  color: black;
  font-size: 16px;

  ${ThoughtCard}:hover & {
    text-decoration: underline;
  }
`;

const BlogDate = styled.p`
  font-family: "Roboto Bold", sans-serif;
  color: ${(props) => props.color};
  font-size: 16px;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const BlogInfo = styled.p`
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const EndingArrows = styled.span`
  font-size: 9px;
  color: #f44336;
  display: inline;
`;