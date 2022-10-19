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

`;

export default GlobalStyles;