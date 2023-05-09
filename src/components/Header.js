import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderSection>
      <ProfileImg src="images/andrea.JPG" />
      <Name><h1>Andrea Hedström</h1></Name>
      <Title>
        <h1>Front End Developer</h1>
        <h2>+ Digital communicator with UX-knowledge</h2>
      </Title>
      <Introduktion>
        <p>Hej hej</p>
      </Introduktion>
      <Icons>
        <StyledA href="https://www.linkedin.com/in/andrea-hedstr%C3%B6m-3549a516b/">
          <i className="fa-brands fa-linkedin-in" />
        </StyledA>
        <StyledA href="https://github.com/AndreaHedstrom">
          <i className="fa-brands fa-github" />
        </StyledA>
        <StyledA href="mailto:andrea.hedstrom@outlook.com">
          <i className="fa-regular fa-envelope" />
        </StyledA>
      </Icons>
    </HeaderSection>
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
margin-bottom: -30px;
`

const Introduktion = styled.div`
p {
font-size: 22px;
font-family: 'EB Garamond';
}
`

const Icons = styled.div`
display: flex;
flex-direction: row;
gap: 30px;
`

const StyledA = styled.div`
color: #D0D0D0;
&:hover {
color: black;
}
font-size: 30px;
`

export default Header;