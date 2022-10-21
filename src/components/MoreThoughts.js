import React from 'react'
import styled from 'styled-components';
import morethoughts from '../data/morethoughts.json';

export const MoreThoughts = ({ color, backColor }) => {
  return (
    <OuterWrapper backColor={backColor}>
      <InnerWrapper>
        <SectionHeader color={color}>MORE THOUGHTS</SectionHeader>
        <MoreThoughtsContainer>
          {morethoughts.map((thought) => {
            return (
              <MoreThought
                key={thought.title}
                href={thought.url}
                target="_blank">
                <InfoContainer color={color}>
                  <Date color={color}>{thought.date.toUpperCase()}</Date>
                  <Title>{thought.title}<EndingArrows color={color}>{' >>'}</EndingArrows></Title>
                </InfoContainer>
              </MoreThought>
            );
          })}
        </MoreThoughtsContainer>
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

const SectionHeader = styled.h3`
  color: ${(props) => props.color};
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  font-size: 22px;
  line-height: 1;
  padding: 5px 10px;
  margin: 20px 0 20px 0;
  line-height: 1;
`

export const MoreThoughtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const MoreThought = styled.a`
text-decoration: none;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 3px solid ${(props) => props.color};

 @media (max-width: 800px) {
  flex-direction: column;
  align-items: flex-start;
 }

`;

export const SkillTagContainer = styled.div`
  display: flex;
`;

export const Date = styled.p`
  color: ${(props) => props.color};
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 0;
  margin-right: 10px;
`;

export const Title = styled.p`
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
`;

export const EndingArrows = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.color};
  display: inline;
`;