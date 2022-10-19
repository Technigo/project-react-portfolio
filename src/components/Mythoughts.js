import styled from 'styled-components'
import React from 'react-dom'
import Global from './Global';

const Mythoughts = () => {
  return (
    <StyledMythoughts>
      <Global>My Thoughts</Global>
    </StyledMythoughts>
  );
}

const StyledMythoughts = styled.div`
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

export default Mythoughts;