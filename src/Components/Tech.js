import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';
import ColorTitle from './Shared/ColorTitle';

const Tech = () => {
  const TechStyle = styled.div`
    background-color: var(--secondBackground);
    display: row;
    justify-content: center;
    text-align: center;
    padding: 25px 0 45px 0;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
  `;
  return (
    <ContentWrapper as="section" backgroundColor="var(--secondBackground)">
      <ColorTitle title="TECH" />
      <TechStyle>
        <p>
          HTML, CSS, Flexbox, JavaScript ES6, React, Web Accessibility, API:s,
          mob-programming, pair-programming, Github.
        </p>
      </TechStyle>
    </ContentWrapper>
  );
};
export default Tech;
