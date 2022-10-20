import React from 'react'
import styled from 'styled-components';
import morethoughts from '../data/morethoughts.json';

export const MoreThoughts = ({ color }) => {
  return (
    <Wrapper>
      <SectionHeader color={color}>MORE THOUGHTS</SectionHeader>
      <MoreThoughtsContainer>
        {morethoughts.map((thought) => {
          return (
            <MoreThought
              key={thought.title}
              href={thought.url}
              target="_blank">
              <InfoContainer>
                <Date>{thought.date.toUpperCase()}</Date>
                <Title>{thought.title}<EndingArrows>{'>>'}</EndingArrows></Title>
              </InfoContainer>
            </MoreThought>
          );
        })}
      </MoreThoughtsContainer>
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

const SectionHeader = styled.h3`
  color: ${(props) => props.color};
  display: inline-block;
  padding: 4px;
  margin: 20px 0 20px 0;
  font-weight: bold;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 1;
    padding: 10px 15px;
    margin-bottom: 40px;
`

export const MoreThoughtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const MoreThought = styled.a`

`

export const InfoContainer = styled.div`
  display: flex;
`;

export const SkillTagContainer = styled.div`
  display: flex;
`;

export const Date = styled.h4`
  color: red;
  text-decoration: underline;
  margin-right: 1%;
  font-size: 18px;
  font-weight: bold;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;

export const Title = styled.p`
  color: black;
  text-decoration: underline;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;

export const EndingArrows = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #f44336;
  display: inline;
`;