import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');
* {
    margin: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    font-family: 'Cabin', sans-serif;
}
`
export const Container = styled.div`
width: 327px;
margin: 0 auto;
`

export default GlobalStyles;