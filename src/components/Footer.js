import React from 'react';
import styled from 'styled-components';
import andrea from 'images/andrea.JPG'

const Footer = () => {
  return (
    <FooterSection>
      <Header>
        <h1>
        Let &apos;s have a coffee!
        </h1>
      </Header>
      <ProfileImg src={andrea} />
      <Name><h1>Andrea Hedström</h1></Name>
      <Title>
        <h1>Front End Developer</h1>
        <h3>+ Digital communicator with UX-knowledge</h3>
      </Title>
      <Contact>
        <p>+46(0) 762 62 42 59</p>
        <p>andrea.hedstrom@outlook.com</p>
      </Contact>
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
const Header = styled.h1`
font-family: 'Satoshi';
font-size: 18px;
margin-bottom: -12px;
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
color: #C875DF;
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