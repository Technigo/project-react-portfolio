import React from 'react'
import styled from 'styled-components'
import profileImg from 'Images/profileCM.png'
import backgroundImg from 'Images/portfolioBackground-desktop.png'

export const Header = () => {
  return (
    <StyledHeader>
      <SocialMediaIcons>
        <a href="https://nl.linkedin.com/in/carimoreno" role="button" target="_blank" rel="noreferrer">
          <img src="Images/LinkedIn.svg" alt="My LinkedIn" />
        </a>
        <a href="https://github.com/carimore" role="button" target="_blank" rel="noreferrer">
          <img src="Images/Github.png" alt="My Github" />
        </a>
        <a href="https://stackoverflow.com/users/19840222/carina-moreno" role="button" target="_blank" rel="noreferrer">
          <img src="src/Images/StackOverflow.png" alt="My StackOverflow" />
        </a>
      </SocialMediaIcons>
      <HeaderText>
        <div className="heading-name">PORTFOLIO: CARINA MORENO</div>
        <span style={{ fontWeight: '700' }}>frontend developer </span>
        <span style={{ fontWeight: '400', fontSize: '24px', lineHeight: '32px' }}>+ educator</span>
      </HeaderText>
      <ProfilePic src={profileImg} alt="Profile Picture Carina Moreno" />
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
    font-family: Roboto;
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
const SocialMediaIcons = styled.div`
  position: absolute;
  right: 15%;
  top: 50px;
  display: flex;
  flex-direction: row;

  img {
    width: 50px;
    margin-left: 10px;
  }
`