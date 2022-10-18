/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const OuterWrapper = styled.div`
margin: 0px auto;
font-family: 'Roboto';
text-align: left;
color: blue;
`;

const Title = styled.h1`
 font-family:'Montserrat', sans-serif;
    background-color: #FA382F;
    width:fit-content;
    color: red;
    display: flex;
    align-items: center;
`

const GlobalComponents = () => {
  return (
    <>
      <OuterWrapper />
      <Title />
    </>
  )
}

export default GlobalComponents