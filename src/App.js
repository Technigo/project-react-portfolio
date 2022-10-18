import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/styled/Global';
import Header from './components/Header';

const theme = {
  colors: {
    main: 'rgba(128, 136, 255, 1)',
    sub: 'rgba(255, 132, 24, 1)',
    third: 'rgb(163, 163, 163)',
    sectionBg: '#f4f4f4'
  }
};

const App = () => {
  return (

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>

  );
};

export default App;
