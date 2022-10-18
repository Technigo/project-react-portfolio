import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
  --heading: #212729 /*#1A3C40 */;
  --ligtherGreen: #417D7A;
  --primary: #F7F7F2;
  --secondary: #EDE6DB;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color:var(--primary);
  font-family: 'Montserrat', serif;  
}

section, footer {
  padding: 2rem 1.5rem;
} 

h1 {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: .2rem;
}

h2, h3 {
  background: var(--heading);
  color: #FCF8EC;
  justify-self: center;
  margin: 8px auto 40px;
  padding: 5px;
  text-align: center;
  text-transform: uppercase;
  width: fit-content;
}

p {
  display: inline-block;
  font-family: 'Roboto Condensed', sans-serif;    
  font-size: 17px;
  line-height: 29px;
  max-width: 600px; 
}
a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}
`

export default GlobalStyles