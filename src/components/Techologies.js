/* eslint-disable comma-dangle */
import React from 'react';
import styled from 'styled-components';
import { BlockSectionWhite, InnerWrapper, TagWrapper } from './styles/Wrappers';

export const Technologies = () => {
  const tech = [
    'HTML',
    'CSS',
    'Flexbox',
    'JavaScript',
    'ES6',
    'JSX',
    'React',
    'React Hooks',
    'Redux',
    'Node.js',
    'Mongo DB',
    'Web Accessibly',
    'API:s',
    'Mob-Programming',
    'Pair-Programming',
    'Github',
  ];

  return (
    <BlockSectionWhite>
      <InnerWrapper>
        <Title>
          <h3>Tech</h3>
        </Title>
        <TagWrapper className="wrap-text">
          {tech.map((tag) => {
            return <p key={tag}>{tag}</p>;
          })}
        </TagWrapper>
      </InnerWrapper>
    </BlockSectionWhite>
  );
};

const Title = styled.div`
  margin-bottom: 1em;
`;
