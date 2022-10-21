import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

:root {
    --main-beige: rgb(247, 236, 222);
    --main-pastel-beige: rgb(233, 218, 193);
    --main-peach: rgb(250, 112, 112);
}

* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    font-family: 'Cabin', sans-serif;
}

section:nth-child(2n) {
    background-color: var(--main-pastel-beige);
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex; 
    flex-direction: column; 
}

section:nth-child(2n+1) {
    background-color: var(--main-beige);
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex; 
    flex-direction: column; 
}

h2 {
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 40px;
}

h2 span {
    background-color: var(--main-peach);
    padding: 0 0.2em;
    border-radius: 5px;
}

a:link {
    color: black;
    text-decoration-line: none;
}

a:visited {
    color: black;
    text-decoration-line: none;
}

a:hover {
    font-weight: bold;
}

header {
    height: 520px;
    position: relative;
    background-size: cover;
}

footer {
    background-color: var(--main-peach);
    padding-top: 84px;
    padding-bottom: 84px;
}
`
export const Container = styled.div`
width: 327vw;
margin: 0 auto;

@media (min-width: 768px){
    width: 440vw;
    margin: 0 auto;
}

@media (min-width: 1024px){
    width: 60vw;
    margin: 0 auto;
    position: relative;
}
`
export const Hidden = styled.span`
    position:absolute;
    left:-10000px;
    top: auto;
    width:1px;
    height:1px;
    overflow:hidden;
`

export default GlobalStyles;