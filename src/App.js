import React from 'react';
// import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/styled/Global';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className="outer-wrapper">
        <Header />
      </div>
    </>
  );
};

export default App;
