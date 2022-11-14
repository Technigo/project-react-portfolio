import React from 'react'
import styled from 'styled-components'
import profileImg from 'Images/profileCM.png'
import backgroundImg from 'Images/portfolioBackground-desktop.png'
import Mail from 'Images/Mail.png'

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderText>
        <div className="heading-name">PORTFOLIO: CARINA MORENO</div>
        <span style={{ fontWeight: '700' }}>website designer</span>
        <span style={{ fontWeight: '700' }}>+ front-end developer </span>
        <span style={{ fontWeight: '400', fontSize: '24px', lineHeight: '32px' }}>background in education</span>
      </HeaderText>
      <ProfilePic src={profileImg} alt="Profile Picture Carina Moreno" />
      <a href="mailto:carimoreno1@gmail.com" role="button" target="_blank" rel="noreferrer">
        <Mailme src={Mail} alt="Email me" />
      </a>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-image: url(${backgroundImg});
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 65vh;
`

const ProfilePic = styled.img`

position: absolute;
right: 10%;
bottom: -5%;
height: 180px;
width: 180px;
border: 2px solid white;
border-radius: 50%;
object-fit: cover;

@media (min-width: 1024px) {
    right: 15%;
    width: 200px;
    height: 200px;
}
`

const HeaderText = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column wrap;
  width: auto;
  left: 15%;
  top: 150px;
  font-family: 'Montserrat';
  font-size: 36px;
  font-weight: bold;
  line-height: 40px;
  white-space: wrap;

  .heading-name {
    font-family: Karla;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }

  @media (min-width: 450px) {
    left: 15%;
    font-size: 52px;
    line-height: 49px;
}
`

const Mailme = styled.img`
  position: fixed;
  right: 10%;
  top: 60%;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  object-fit: cover;
  z-index: 99;

@media (min-width: 1024px) {
  right: 15%;
  top: 70%;
  height: 85px;
  width: 85px;

}
`
