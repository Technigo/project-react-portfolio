import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <Header>Time to talk</Header>
      <ProfileImg src="" />
      <Name>Andrea Hedström</Name>
      <Title>
        <h1>Front End Developer</h1>
        <h3>+ Digital communicator with UX-knowledge</h3>
      </Title>
      <Contact>
        <p>0762 62 42 59</p>
        <p>andrea.hedstrom@outlook.com</p>
      </Contact>
    </FooterSection>

  )
}
export default Footer;

const FooterSection = styled.div`
display: flex;
flex-direction: flex-start;
`
const Header = styled.div`
font-size: 58px;
`
const ProfileImg = styled.img`

`
const Name = styled.div`
font-size: 20px;
color: black;
`
const Title = styled.div`
color: blue;
`
const Contact = styled.p`
font-size: 18px;
color: black;
`