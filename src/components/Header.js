import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderSection>
      <ProfileImg src="" />
      <Name><h1>Andrea Hedström</h1></Name>
      <Title>
        <h1>Front End Developer</h1>
        <h2>+ Digital communicator with UX-knowledge</h2>
      </Title>
      <Introduktion>
        <p>Hej hej</p>
      </Introduktion>
    </HeaderSection>
  )
}

const HeaderSection = styled.div`
display: flex;
flex-direction: column;
`
const ProfileImg = styled.img`
align-self: center;
margin: 55px;
width: 164px;
height: 164px;
object-fit: cover;
border-radius: 100px;
`
const Name = styled.div`
h1 {
font-size: 28px;
color: black;
}
`

const Title = styled.div`
h1 {
font-size: 32px;
color: #0b2dd4;
}
h2 {
font-size: 24px;
color: #D0D0D0
}
`

const Introduktion = styled.div`
p {
font-size: 22px;
font-family: 'EB Garamond';
}
`

export default Header;