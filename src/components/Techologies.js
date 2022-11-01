import React from 'react';
import styled from 'styled-components';
import { BlockSectionWhite, InnerWrapper, TagWrapper } from './styles/Wrappers';

export const Technologies = () => {
  return (
    <BlockSectionWhite>
      <InnerWrapper>
        <Title>
          <h3>Tech</h3>
        </Title>
        <TagWrapper className="wrap-text">
          <p>HTML</p>
          <p>CSS</p>
          <p>Flexbox</p>
          <p>JavaScript</p>
          <p>ES6</p>
          <p>JSX</p>
          <p>React</p>
          <p>React Hooks</p>
          <p>Redux</p>
          <p>Node.js</p>
          <p>Mongo DB</p>
          <p>Web Accessibly</p>
          <p>API:s</p>
          <p>Mob-Programming</p>
          <p>Pair-Programming</p>
          <p>Github</p>
        </TagWrapper>
      </InnerWrapper>
    </BlockSectionWhite>
  );
};

const Title = styled.div`
  margin-bottom: 1em;
`;
