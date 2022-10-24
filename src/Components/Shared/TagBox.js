import React from 'react';
import styled from 'styled-components/macro';

const StyledTagBox = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 11px;
  line-height: 20px;
  padding: 0px 4px;
  margin: 2px 5px 2px 0px;
  background-color: var(--buttonBackground);
  display: inline-block;
  `;

const TagBox = ({ tag }) => {
  return (
    <StyledTagBox>
      {tag}
    </StyledTagBox>
  )
}
export default TagBox;