/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Tech = () => {
  return (
    <TechSection>
      <Header>
        <h1>Tech</h1>
      </Header>
      <TechText>
        <p>
          HTML, CSS, Flexbox, <span>JavaScript,</span> ES6, JSX, <span>React,</span> React Hooks, Redux, Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
        </p>
      </TechText>
    </TechSection>
  )
}

const TechSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F0EAD4;
height: 500px;
width: 100%;
margin-bottom: 20px;
position: relative;
--mask:
    radial-gradient(65.38px at 50% 91.20px,#000 99%,#0000 101%) calc(50% - 76px) 0/152px 51% repeat-x,
    radial-gradient(65.38px at 50% -53.2px,#0000 99%,#000 101%) 50% 38px/152px calc(51% - 38px) repeat-x,
    radial-gradient(65.38px at 50% calc(100% - 91.20px),#000 99%,#0000 101%) calc(50% - 76px) 100%/152px 51% repeat-x,
    radial-gradient(65.38px at 50% calc(100% + 53.20px),#0000 99%,#000 101%) 50% calc(100% - 38px)/152px calc(51% - 38px) repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
`

const Header = styled.h1`
font-family: 'Satoshi';
font-size: 43px;
margin-top: -70px;
color: #7A896D;
`
const TechText = styled.p`
font-family: 'EB Garamond';
font-size: 22px;
padding: 20px;
margin-top: -120px;
span {
  background: #D6A9E2;
}
@media (min-width: 768px) {
  width: 400px;
}
`
export default Tech;