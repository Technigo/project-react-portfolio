import React from 'react';
import GlobalStyles from 'components/styled/Global';
import { OuterWrapper, InnerWrapper } from 'components/styled/Wrappers.styled';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <OuterWrapper>
        <InnerWrapper>
          <Header />
        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default App;
