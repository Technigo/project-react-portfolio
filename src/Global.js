import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{

background-color: white;

h1{
font-size: 2rem;
color: white;
} 

h2{
font-size: 2rem;
} 

@media (min-width: 668px) {

h1{
font-size: 4rem;
} 

h2{
font-size: 3rem;
} 

}

@media (min-width: 1024px) {

h1{
font-size: 3rem;
} 

h2{
font-size: 2rem;
} 

}
`;