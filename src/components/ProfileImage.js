import React from 'react';
import profileImage from '../assets/profileImage.jpeg';
import { ProfileImageStyle } from '../styles/ProfileImageStyle';

export const ProfileImage = () => {
  return <ProfileImageStyle src={profileImage} alt="Tina" />
}