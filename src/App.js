import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import { OuterWrapper } from 'styles/mainStyles';
// import styled from 'styled-components';

export const App = () => {
  return (
    <OuterWrapper>
      <Header />
      <Main />
      <Footer />
    </OuterWrapper>
  )
}
