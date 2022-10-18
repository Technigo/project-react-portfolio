import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
  position: relative;
  text-align: center;
  /* &:hover {
    opacity: 70%;
    transition-duration: 0.2s;
  } */
  
`;
const Img = styled.img`
  display: flex;
  justify-items: flex-end;
  position: absolute;
  right: 24px;
  top: -170px;  
  width: 180px; 
  height: 180px; 
  border-radius: 50%;
  object-fit: cover;
  border:solid rgb(185, 0, 91); 

  @media (min-width: 768px) {
    top: -220px; 
    right: 40px; 
    position: absolute;
    width: 230px;
    height: 230px;
    
  }
  @media (min-width: 1024px) {
    top: -280px; 
    right: 80px; 
    position: absolute;
    width: 300px;
    height: 300px;
    
  }
`;

const ProfileImage = () => {
  return (
    <Profile>
      <Img src="./assets/profil.jpg" alt="Amanda Elvkull" />
    </Profile>
  )
}

export default ProfileImage