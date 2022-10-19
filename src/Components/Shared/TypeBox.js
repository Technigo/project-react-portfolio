import React from 'react';
import styled from 'styled-components/macro';

const TypeBox = ({ type1, type2, type3, type4 }) => {
  const Type = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 11px;
  line-height: 20px;
  padding: 0px 4px;
  margin: 2px 5px 2px 0px;
  background-color: var(--buttonBackground);
  `;

  return (
    <>
      <Type>{type1}</Type>
      <Type>{type2}</Type>
      <Type>{type3}</Type>
      <Type>{type4}</Type>
    </>
  );
};
export default TypeBox;