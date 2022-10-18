import React from 'react';
import GlobalStyles from 'components/styled/Global';
import { OuterWrapper, InnerWrapper } from 'components/styled/Wrappers.styled';
import Header from './components/Header';
import Summary from './components/Summary';
import Tech from './components/Tech';

import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <OuterWrapper>
        <InnerWrapper>
          <Header />
          <Summary />
          <Tech />
          <Footer />
        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default App;
