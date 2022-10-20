import React from 'react';
import styled from 'styled-components';
import { Container } from './styled-components/GlobalStyles';

const TechText = styled.p`
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 29px;
color: black;
text-align: center;
margin-top: -16px;`

const Tech = () => {
  return (
    <section>
      <Container>
        <h2><span>TECH</span></h2>
        <TechText>
        Javascript, React.js, Redux, Next.js, Node.js, SASS, CSS and HTML.
        </TechText>
      </Container>
    </section>
  )
}

export default Tech;