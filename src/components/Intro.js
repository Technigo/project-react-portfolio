/* eslint-disable react/no-unescaped-entities */
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
          I'm a Junior Software Developer who is <b>passionate about writing clean and maintainable code as well as creating smart features and solutions. I'm interested in working in a cross-functional team to create solutions that make things easier and better for end users.</b><br />
           I've been familiar with the IT industry for a long time, since I worked for several years as an IT Recruiter in several consultancies.<br />
          <br />My main interest is working with <b>JavaScript, either with React.js or Node.js.</b>.
        </IntroText>
      </Container>
    </section>
  )
}

export default Intro;