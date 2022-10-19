/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const OuterWrapper = styled.div`
margin: 0px auto;
font-family: 'Roboto';
text-align: left;
width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 80%;
  padding-top: 7vh;
  padding-bottom: 7vh;
  display: flex; 
  flex-direction: column;
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1025px){ 
    width: 70%;
  }
  @media (min-width: 1600px) {
    width: 60%;
  }

`

export const Title = styled.h1`
 font-family:'Montserrat', sans-serif;
    background-color: #FA382F;
    color: white;
    
`
