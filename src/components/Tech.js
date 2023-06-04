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