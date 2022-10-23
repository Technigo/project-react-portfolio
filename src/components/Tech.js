import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle } from './reusable/Wrappers';

export const Tech = () => {
  const TechSection = styled.div`
    padding: 50px 0px;
    position: relative;
    width: 100%;
    background-color: rgba(208, 203, 203, 0.572);
    color: #fcfaf88a;
    border-top: solid #c8aa89c6 1px;
    border-bottom: solid #c8aa89c6 1px;
  `
  const TechText = styled.div`
    margin-top: 20px;
    text-align: center;
    padding: 20px 100px 20px 100px;
    color: #c8aa89c6;
  `;
  return (
    <OuterWrapper>
      <InnerWrapper>
        <TechSection>
          <SectionTitle>
            <p>tech</p>
          </SectionTitle>
          <TechText>
            HTML5, CSS, JavaScript ES6, React, Flexbox, Web accessibility,
             APIs, mob programming, pair programming, GitHub
          </TechText>
        </TechSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}