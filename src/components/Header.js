import React from 'react';
import styled from 'style-components';

export const Header = () => {
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

`

const Introduktion = styled.div`
font-size: 18px;
`