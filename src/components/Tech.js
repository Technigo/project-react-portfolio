import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle } from './reusable/Wrappers';

export const Tech = () => {
  const TechSection = styled.div`
    position: relative;
    padding: 50px 0px 50px 0px;
    width: 100%;
    background-color: white;
    color: #fcfaf88a;
    border-top: solid 1px var(---main);
    border-bottom: solid 1px var(---main);
  `;

  const TechText = styled.div`
    margin-top: 20px;
    padding: 20px 100px 20px 100px;
    text-align: center;
    color: grey;
    font-weight: bold;
    @media (max-width: 760px) {
      padding: 20px 0px 20px 0px;
    }
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>
        <TechSection>
          <SectionTitle>
            <p>tech</p>
          </SectionTitle>
          <TechText>
          React | JavaScript ES6 | HTML5 | CSS3
          </TechText>
        </TechSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}