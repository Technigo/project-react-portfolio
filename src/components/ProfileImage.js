import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/profileImage.jpeg';

export const ProfileImage = () => {
  return <ProfileImageStyle src={profileImage} alt="Tina" />
}

export const ProfileImageStyle = styled.img`
  width: 180px;
  height: 164px;
  border-radius: 50%;
  border: 2px solid whitesmoke;
  overflow: hidden;
  position: relative;
  top: 2rem;
  align-self: flex-end;

  @media (min-width: 668px) {
    width: 300px;
    height: 274px;
  }
  
  @media (min-width: 1025px) {
    width: 330px;
    height: 301px;
  }
`