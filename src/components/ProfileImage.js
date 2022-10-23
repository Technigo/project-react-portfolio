import React from 'react';
import styled from 'styled-components';
import profileimage from '../assets/profileimage.jpg';

export const ProfileImage = () => {
  return (
    <ProfileImageStyling src={profileimage} alt="Thérèse" />
  )
}

export const ProfileImageStyling = styled.img`
    width: 100px;
    height: auto;
    object-fit: cover;
    border-radius: 50px;
    border: 1px solid whitesmoke;

`