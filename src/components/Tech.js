import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle } from './reusable/Wrappers';

export const Tech = () => {
  const TechSection = styled.div`
    position: relative;
    padding: 50px 0px 100px 0px;
    width: 100%;
    background-color: white;
    color: #fcfaf88a;
  `;

  const TechText = styled.div`
    margin-top: 20px;
    padding: 20px 100px 20px 100px;
    text-align: center;
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