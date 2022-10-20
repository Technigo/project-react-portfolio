import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
.innerwrapper{
margin-left: 10vw;
margin-right: 10vw;
background-color: red;
} 
@media (min-width: 668px) {
}

@media (min-width: 1024px) {
}
}
body{

background-color: white;

h1{
font-size: 2rem;
color: white;
margin-left: 2%;
} 

h2{
font-size: 2rem;
margin-left: 2%;
} 

h3{
text-transform: uppercase;
color: #fff;
background-color: rgb(255, 119, 119);
display: table;
}
h4{
	text-transform: uppercase
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
}`