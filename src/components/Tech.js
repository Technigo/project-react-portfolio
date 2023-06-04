/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

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
      <ImageSection>
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/private_files/lf30_inPNOM.json"
          style={{ height: '200px', width: '300px' }}>
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </ImageSection>
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
const ImageSection = styled.div`
position: absolute;
margin-bottom: -340px;
@media (min-width: 1000px) {
  display: none;
}
`
export default Tech;