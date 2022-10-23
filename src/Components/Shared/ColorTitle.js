import React from 'react';
import styled from 'styled-components/macro';

const ColorTitle = (props) => {
  const { background, title } = props;

  const TitleWrapperStyle = styled.div`
  // background-color: ${background};
  // background-color: black;
  padding: 15 0 30px 0;
  margin: 0;
  display: flex;
  justify-content: center;
  border: solid 2px black;
`
  const TitleStyle = styled.h2`
  background-color: var(--fourthTitle);
  padding: 2px 6px;
  margin: 18px;
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat, sans-serif;
  letter-spacing: 1px;

  text-align: center;
  align-self: center;
  letter-spacing: 1px;
  color: var(--secondaryBackground);
  border-radius: 2px;
  // display: inline;
  // justify-content: center;
  `;
  return (
    <div>
      <TitleWrapperStyle>
        <TitleStyle>{title}</TitleStyle>
      </TitleWrapperStyle>
    </div>
  );
};
export default ColorTitle;