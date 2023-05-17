/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import andrea from 'images/andrea.JPG'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderSection>
        <ProfileImg src={andrea} />
        <Name><h1>Andrea Hedström</h1></Name>
        <Title>
          <h1>Front End Developer</h1>
          <h2>+ Digital communicator with UX-knowledge</h2>
        </Title>
        <Introduktion>
          <p>With a background working within LSS mixed with studies both in Swedish Sign Language, design and digital communication I now want to bring evertyhing together in my new role as an Frontend Developer. My ultimate goal is to merge my diverse skill set to create innovative and inclusive solutions that benefit all users.</p>
        </Introduktion>
        <Icons>
          <StyledA href="https://www.linkedin.com/in/andrea-hedstr%C3%B6m-3549a516b/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in" />
          </StyledA>
          <StyledA href="https://github.com/AndreaHedstrom" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" />
          </StyledA>
          <StyledA href="mailto:andrea.hedstrom@outlook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-regular fa-envelope" />
          </StyledA>
        </Icons>
      </HeaderSection>
      <ImageSection>
        <Coder>
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/private_files/lf30_inPNOM.json"
            style={{ height: '600px', width: '800px' }}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </Coder>
      </ImageSection>
    </HeaderWrapper>
  )
}

const HeaderSection = styled.div`
font-family: "Satoshi";
display: flex;
flex-direction: column;
margin: 20px;
`
const ProfileImg = styled.img`
align-self: center;
margin: 55px;
width: 164px;
height: 164px;
object-fit: cover;
border-radius: 100px;

@media (min-width: 768px) {
  align-self: flex-start;
}
`
const Name = styled.div`
h1 {
font-size: 28px;
color: black;
}
margin-bottom: -40px;
`

const Title = styled.div`
h1 {
font-size: 32px;
color: #C875DF;
margin-bottom: -20px;
}
h2 {
font-size: 24px;
color: #D0D0D0
}
margin-bottom: -30px;
`

const Introduktion = styled.div`
p {
font-size: 22px;
font-family: 'EB Garamond';
}
@media (min-width: 768px) {
  width: 500px;
}
`

const Icons = styled.div`
display: flex;
flex-direction: row;
gap: 30px;
`

const StyledA = styled.a`
color: #D0D0D0;
&:hover {
color: black;
}
font-size: 30px;
`
const ImageSection = styled.div`
display: none;
@media (min-width: 1000px){
  display: block;
}
`

const HeaderWrapper = styled.div`
@media (min-width: 668px) {
  display: flex;
  flex-direction: row;
}
`
const Coder = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: -40px;
`

export default Header;