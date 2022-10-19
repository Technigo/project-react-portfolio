import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
};

body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #000;
    color: #fff;
  }
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;

