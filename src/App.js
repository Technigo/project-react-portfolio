import React from 'react';
import { CurrentTitle, Header, Name, Title } from 'styledComponents/Header';

export const App = () => {
  return (
    <Header>
      <Name>PORTFOLIO: CHARLOTTE JOHANSSON</Name>
      <Title>frontend developer</Title>
      <CurrentTitle>+ project manager</CurrentTitle>
    </Header>
  )
}