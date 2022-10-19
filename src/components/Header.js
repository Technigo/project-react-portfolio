import styled from 'styled-components'
import React from 'react'
import HeaderImg from '../images/headerimg.jpg'
import ProfileImg from '../images/KL.jpg'

const Header = () => {
  return (
    <Background>
      <img className="header-image" src={HeaderImg} alt="background of shapes" />
      <Profile> <img className="profile" src={ProfileImg} alt="profile" /></Profile>
      <HeaderText>
        <h2 className="name">PROTFOLIO: KRISTIN LARSSON</h2>
        <h2 className="frontend">frontend developer</h2>
        <h2 className="designer">designer</h2>
      </HeaderText>
    </Background>
  );
}

const Background = styled.div`
border: 2px solid hotpink;
backgroundcolor: "#F7E9D7";
width: 100%;
height: 450px;

.header-image {
width: 100%;
height: 450px;
filter: brightness(70%); }
`

const Profile = styled.div`
position: absolute;
width: 180px;
right: 10%;
top: 300px;
border: 3px solid white;
border-radius: 50%;
`

const HeaderText = styled.div`
    width: 220px;
    height: 202px;
    top: 121px;
    left: 10%;
    text-align: left;
    position: absolute;
    color: rgb(255, 255, 255);

.name {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.04em;
    width: 400px;
}

.frontend {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-size: 40px;
    line-height: 49px;
    font-weight: 700;
    margin: 0;
}

.designer {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-size: 19px;
    line-height: 40px;
    font-weight: 700;
    margin: 0;
}
`

export default Header;