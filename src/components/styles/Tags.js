/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

export const Tags = ({ tags }) => {
  return (
    <TagWrapper>
      {tags.map((tag, index) => {
        return <p key={index}>{tag.name}</p>;
      })}
    </TagWrapper>
  );
};

export const TagWrapper = styled.div`
  display: flex;

  p {
    font-family: 'Roboto', sans-serif;
    color: #2b2e34;
    font-weight: bold;
    background-color: #fddfe7;
    text-decoration: none;
    font-size: 12px;
    line-height: 12px;
    padding: 5px 8px;
    margin: 3px 0;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
`;
