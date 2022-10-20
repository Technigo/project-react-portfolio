import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './Shared/ContentWrapper';

const Intro = () => {
  const TextStyle = styled.div`
  padding: 10px;
  `;

  return (
    <ContentWrapper
      as="section"
      backgroundColor="var(--thirdBackground)"
      textColor="var(--thirdBackground)">
      <TextStyle>
        Hello! I am Petra 👋🏼 a curious problem solver that loves learning new things.
        After 6 years of working
        as a user researcher at Zettle/iZettle
        I recently discovered my passion for building applications. I am now looking
        for a place to grow my skills as a front-end developer.
        If you think we are a good match, let&apos;s talk!
      </TextStyle>
    </ContentWrapper>
  );
};
export default Intro;