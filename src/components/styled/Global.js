import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  --main-font: 'Montserrat', sans-serif;
  --sub-font: 'Roboto', sans-serif;

  --bg-color: #f4f4f4;
  --main-color: rgba(128, 136, 255, 1);
  --sub-color: rgba(255, 132, 24, 1);
  --third-color: rgb(163, 163, 163);
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.outer-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
}

.inner-wrapper {
  margin: 0 auto;
  width: 80%;
  max-width: 1200px;
}
`;

export default GlobalStyles;
