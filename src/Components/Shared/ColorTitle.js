/* The coloured title box */
import React from 'react';
import styled from 'styled-components/macro';

const ColorTitle = (props) => {
  const { title } = props;

  const TitleWrapperStyle = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
  `;
  const TitleStyle = styled.h2`
    background-color: var(--fourthTitle);
    padding: 1px 6px;
    margin: 20px;
    font-size: 21px;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    letter-spacing: 1px;

    text-align: center;
    align-self: center;
    letter-spacing: 1px;
    color: var(--secondaryBackground);
    border-radius: 2px;
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
