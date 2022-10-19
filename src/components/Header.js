import styled from 'styled-components'
import React from 'react-dom'

const Header = () => {
  return (
    <StyledHeader>
      <p>testtest</p>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
border: 2px solid hotpink;
backgroundcolor: "#F7E9D7";
width: 100%;
height: 450px;

p {
    width: 80%;
    font-family: "Montserrat", sans-serif;
    font-style: 400;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    margin: 0;
    word-wrap: break-word;
    text-align: center;
}

`

export default Header;