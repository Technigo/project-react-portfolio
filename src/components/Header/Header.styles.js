/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const StyledHeader = styled.header`

    height: 500px;
    background-image: url('https://images.unsplash.com/photo-1500313721839-c6e156097456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
    background-size: cover;

    &::before {
    content: '';
    position: absolute;
    top: 400px;
    height: 100px;
    width: 100vw;
    background: url('https://images.unsplash.com/photo-1500313721839-c6e156097456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
    background-image: url('./images/wave3.png');
    background-size: 1900% 100%;
  }


  @media (min-width: 768px) and (max-width: 991px) {

    &::before {
      background-size: 160% 100%;
  }
  }

  @media (min-width: 992px) {

    &::before {
      background-size: 160% 100%;
    }
  
}
`
export const ProfilePic = styled.img`

    position: absolute;
    right: 20px;
    top: 390px;
    height: 150px;
    width: 150px;
    border: 2px solid white;
    border-radius: 50%;
    object-fit: cover;
  

  @media (min-width: 992px) {
      right: 150px;
      width: 200px;
      height: 200px;
  }
`

export const HeaderText = styled.h1`
    display: flex;
    flex-flow: column wrap;
    position: absolute;
    width: 0%;
    left: 30px;
    top: 200px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 0.04rem;
    color: #ffff;
   
    @media (min-width: 768px) and (max-width: 991px) {
      left: 100px;
  }

    @media (min-width: 992px) {
      left: 200px;
      top: 130px;
      font-size: 1.4rem;
    }

 `