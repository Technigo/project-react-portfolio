import React from 'react';
import styled from 'styled-components';
import profileimage from '../assets/profileimage.jpg';

export const ProfileImage = () => {
  return (
    <ProfileImageStyling src={profileimage} alt="Thérèse" />
  )
}

export const ProfileImageStyling = styled.img`
    position: absolute;
    top: 75%;
    right: 8%;
    width: 120px;
    height: auto;
    object-fit: cover;
    border-radius: 60px;
    border: 1px solid whitesmoke;

`