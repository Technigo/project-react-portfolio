import React from 'react';
import styled from 'styled-components';
import andrea from 'images/andrea.JPG'

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
          <p>With a background within LSS mixed with studies both in Swedish Sign Language, design and digital communication my goal is to "tie the bag together" with my new role as an Frontend Developer. With my experience about both deaf world and LSS I will always have in the back of my head that the design and code have to be userfriendly for everyone.</p>
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
      <ImageSection />
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
@media (min-width: 668px){
  background-color: pink;
}
`
const HeaderWrapper = styled.div`
@media (min-width: 668px) {
  display: flex;
  flex-direction: column;
}
@media (min-width: 668px) {
`

export default Header;