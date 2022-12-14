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

export const Header = styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 18px;
color: white;
margin-bottom: 5%;
@media (min-width: 520px) and (max-width: 1023px){
  font-size: 25px;
}
@media (min-width: 1024px){
  font-size: 30px;
}
`
