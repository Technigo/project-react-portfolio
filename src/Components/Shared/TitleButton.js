import React from 'react';
import styled from 'styled-components/macro';

const TitleButtonStyle = styled.div`
background-color: ${(props) => props.backgroundColor};
  padding: 15 0 30px 0;
  margin: 0;
  display: flex;
  justify-content: center;
`
const Title = styled.h2`
  background-color: var(--fourthTitle);
  padding: 2px 6px;
  margin: 18px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;

  text-align: center;
  align-self: center;
  letter-spacing: 1px;
  color: var(--secondaryBackground);
  border-radius: 2px;
  // display: inline;
  // justify-content: center;
  `;

export const ColorTitle = (props) => {
  return (
    <div>
      <TitleButtonStyle>
        <Title>TECH</Title>
      </TitleButtonStyle>
    </div>
  );
};
export default ColorTitle;