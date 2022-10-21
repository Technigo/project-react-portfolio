import React from 'react'
import styled from 'styled-components/macro'
import backgroundPic from 'Images/portfolioBackground-desktop.png'

const StyledHeader = styled.header`
background-image: url(${backgroundPic})
background-size: cover;
position: absolute;
width: 100vw;
height: 100px;

@media (min-width 539px)
    background-image: src/Images/profileCM.png;
    background-size: cover;
    position: absolute;
    height: 600px;
`

export const ProfilePic = styled.img`

position: absolute;
right: 5%;
bottom: -30%;
height: 180px;
width: 180px;
border: 2px solid white;
border-radius: 50%;
object-fit: cover;

@media (min-width:1024px) {
    right: 10%;
    width: 200px;
    height: 200px;
}
`
export const SocialMediaBar = styled.div`
position: absolute;
right: 5%;
top: 5%;
display: flex;
flex-direction: row;

img {
    width: 55px;
    margin-left: 10px;
    filter: inevrt();
    boder-radius: 50%;

    &:hover {
    background: white;
    }

@media (min-width:1024px) {
    left: 10%;
}
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="headerText">
        <h2>PORTFOLIO: CARINA MORENO</h2>
        <h1>frontend developer</h1>
        <h3> + educator</h3>
      </div>
      <ProfilePic src="/Images/profileCM.png" alt="Profile Picture Carina Moreno" />
    </StyledHeader>
  )
}

export default Header;
