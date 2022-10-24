/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TagWrapper } from './Wrappers';

export const Tags = ({ tags }) => {
  return (
    <TagWrapper>
      {tags.map((tag, index) => {
        return <p key={index}>{tag.name}</p>;
      })}
    </TagWrapper>
  );
};
