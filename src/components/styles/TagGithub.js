import React from 'react';
import styled from 'styled-components';
import { TagWrapper } from './Wrappers';

export const TagGithub = ({ tagGithub }) => {
  return (
    <ClonedTagWrapper>
      <a
        href={tagGithub}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden>
        Github Repository
      </a>
    </ClonedTagWrapper>
  );
};

const ClonedTagWrapper = styled(TagWrapper)`
  a {
    border-radius: 4px;
    background-color: grey;
    color: #2b2e34;
    padding: 5px 8px;
    margin-right: 5px;
  }

  a: hover {
    background-color: #fddfe7;
    color: red;
  }
`;
