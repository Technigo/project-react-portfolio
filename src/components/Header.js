import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderSection>
      <ProfileImg src="" />
      <Name>Andrea Hedström</Name>
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

`
const Name = styled.div`
font-size: 20px;
`

const Title = styled.div`
font-size: 25px;
`

const Introduktion = styled.div`
font-size: 18px;
`

export default Header;