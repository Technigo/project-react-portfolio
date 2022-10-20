import React from 'react';
import styled from 'styled-components';

export const Tags = () => {
  return (
    <TagWrapper>
      <p>HTML</p>
    </TagWrapper>
  );
};

// {tags.map((tag) => {
//     return (
//       <p key={tag}>{tag.toUpperCase()}</p>
//     )
//   })}
export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-family: 'Roboto', sans-serif;
    color: #2b2e34;
    font-weight: bold;
    background-color: #fddfe7;
    text-decoration: none;
    font-size: 12px;
    line-height: 12px;
    padding: 10px 16px;
    margin: 3px;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
`;
