import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';
import ColorTitle from './Shared/ColorTitle';

const Tech = () => {
  const TechStyle = styled.div`
  background-color: var(--secondBackground); 
  display: row;
  border: solid 2px red;
  justify-content: center;
  text-align: center;
  padding: 45px 0 65px 0;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;

`
  return (
    <ContentWrapper
      as="section"
      backgroundColor="var(--secondBackground)">

      <ColorTitle
        background="var(--fourthTitle)"
        title="Tech" />
      <TechStyle>
        <p>HTML, CSS, Flexbox, JavaScript ES6, React, Web Accessibility, API:s, mob-programming,
          pair-programming, Github.
        </p>
      </TechStyle>
    </ContentWrapper>
  );
};
export default Tech;
