import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --main-font: 'Montserrat', sans-serif;
  --sub-font: 'Roboto', sans-serif;

  --bg-color: #f4f4f4;

  --main-color: rgba(128, 136, 255, 1);
  --sub-color: rgba(255, 132, 24, 1);
  --third-color: rgb(163, 163, 163);

  --line-height: 25px;
  --margin: 0 auto;
  --width: 40rem;

  @media (max-width: 750px) {
    --width: 33rem; 
  }

  @media (max-width: 650px) {
    --width: 22rem;
  }
}

body {
  background-color: white;
  font-family: var(--main-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* LINKS */
a {
    color: black;
    font-family: var(--sub-font);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
}

a:visited {
  color: var(--third-color);
}

/* HEADINGS */
h1 {
  font-family: var(--sub-font);
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  margin-bottom: 0.4rem;
  text-transform: uppercase;

  @media (max-width: 650px) {
    font-size: 1.1rem;
  }
}

h2 {
  font-family: var(--main-font);
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (max-width: 650px) {
    font-size: 2.3rem;
  }
}

h3 {
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 650px) {
    font-size: 1.4rem;
  }
}

/* SECTION HEADING */
h4 {
  background-color: var(--main-color);
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 0.2rem 0.4rem;
  margin: 0 auto 2rem;
  width: fit-content;
  text-transform: uppercase;
}

/* SUB HEADING */
h5 {
  color: var(--sub-color);
  font-family: var(--sub-font);
  font-size: 1rem;
  font-weight: 700;
  margin-top: .8rem;
  text-transform: uppercase;

  @media (max-width: 650px) {
    font-size: 1.1rem;
  }
}

h6 {
  color: white;
  font-size: 1.5rem;
  font-weight: 900;
  text-shadow: 3px 3px black;
  padding-top: 5.5rem;
  text-transform: uppercase
}

`;

export default GlobalStyles;