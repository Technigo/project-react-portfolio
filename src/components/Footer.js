import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <Header>Time to talk</Header>
      <ProfileImg src="images/andrea.JPG" />
      <Name><h1>Andrea Hedström</h1></Name>
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
font-family: 'Satoshi';
display: flex;
flex-direction: column;
margin: 20px;
`
const Header = styled.div`
font-size: 58px;
`
const ProfileImg = styled.img`
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
margin-bottom: -40px;
`

const Title = styled.div`
h1 {
font-size: 32px;
color: #0b2dd4;
margin-bottom: -20px;
}
h2 {
font-size: 24px;
color: #D0D0D0
}
margin-bottom: -10px;
`
const Contact = styled.div`
p {
    font-size: 19px;
}
padding-bottom: 20px;
`