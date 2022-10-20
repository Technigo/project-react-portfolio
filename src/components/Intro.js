/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Container } from './styled-components/GlobalStyles';

const IntroText = styled.p`
display: inline;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 29px;
color: black;
`

const Intro = () => {
  return (
    <section>
      <Container>
        <IntroText>
        Female developer and programming student at Technigo, passionate about writing clean and maintainable code and improving the user experience. I get familiar with the IT environment for a long time since I worked for several years as an IT Recruiter in diverse consultancies.
        My main interest is working with JavaScript, either with React.js or Node.js library.
        </IntroText>
      </Container>
    </section>
  )
}

export default Intro;