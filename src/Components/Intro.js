import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';
import DotLine from './Assets/dot_picture.png';

const Intro = () => {
  const TextStyle = styled.div`
    padding: 35px 0 45px 0;
    font-size: 16px;
    line-height: 34px;
    font-weight: 400;

    .dot-image {
      width: 30px;
    }
  `;

  return (
    <ContentWrapper
      as="section"
      backgroundColor="var(--thirdBackground)"
      textColor="var(--thirdBackground)">
      <TextStyle>
        <img className="dot-image" src={DotLine} alt="Intro" /> Hello! I am Petra 👋🏼 a curious problem solver that loves learning new
        things. After 6 years of working as a user researcher at Zettle/iZettle
        I recently discovered my passion for building applications. I am now
        looking for a place to grow my skills as a front-end developer.
        <br />
        If you think we are a good match, let&apos;s talk!
      </TextStyle>
    </ContentWrapper>
  );
};
export default Intro;
