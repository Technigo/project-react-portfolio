import React from 'react';
// import styled from 'styled-components';
import { BlockSection, InnerWrapper, TagWrapper } from './styles/Wrappers';

export const Technologies = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <h3>Tech</h3>
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
          <p>mob-programming</p>
          <p>pair-programming</p>
          <p>Github</p>
        </TagWrapper>
      </InnerWrapper>
    </BlockSection>
  );
};
