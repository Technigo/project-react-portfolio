/*
import React from 'react';
import styled from 'styled-components';
import { Section, SectionHeading } from 'GlobalStyles';
import { thoughts } from '../data/thoughts';


export const Thoughts = ({ }) => {
  return (
    <Section>
      <SectionHeading> </SectionHeading> 
        <ThoughtsContainer>
        {thoughts.map((thought, index) => {
          return (
          <thoughts key={index}>
            <ThoughtTextBox>
              <ThoughtDate>{thought.date}</ThoughtDate>
              <ThoughtTitle>
                <a href={thought.url}>{thought.title}</a>
                
              </ThoughtTitle>
              <ThoughtText>
                {thought.text} <a href={thought.url}></a>
              </ThoughtText>
            </ThoughtTextBox>
          </thoughts>
        );
      })}
    </ThoughtsContainer>
    </Section>
  );
};


const ThoughtsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  padding: 0% 2% 0% 2%;
    
  const Img  {
  width: 100%;
}

  @media (min-width: 768px)  {
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
    justify-items: center;
    padding: 0% 20% 0% 20%;
    }
`
*/
