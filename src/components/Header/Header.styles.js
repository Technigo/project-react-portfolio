/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'
import '../../index.css'

export const StyledHeader = styled.header`

    height: 500px;
    background: url(./images/background.png);
    background-size: cover;
    &::before {
    content: '';
    position: absolute;
    top: 400px;
    height: 100px;
    width: 100vw;
    background: radial-gradient(circle, rgba(95,113,97,1) 0%, rgba(109,139,116,0.9332107843137255) 93%);
    background-image: url('./images/wave3.png');
    background-size: 1900% 100%;
  }


  @media (min-width: 768px) and (max-width: 991px) {

    &::before {
      background-size: 579% 100%;
  }

  }

  @media (min-width: 992px) {

    &::before {
      background-size:  237% 100%;

    }
  }
    @media (min-width: 1280px) {
      background-position: center;

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
  

  @media (min-width: 992px) and (max-width: 1224px) {
      right: 150px;
  }

  @media (min-width: 1225px) {
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
    font-family: "Roboto";
    font-size: 0.8rem;
    letter-spacing: 0.04rem;
    color: #000000d9;
   
    @media (min-width: 768px) and (max-width: 991px) {
      left: 100px;
  }

    @media (min-width: 992px) {
      left: 200px;
      top: 130px;
      font-size: 1.4rem;
      width: unset;
    }

 `

export const HeaderSocialBar = styled.div`
    position: absolute;
    right: 20px;
    top: 100px;
    display: flex;
    flex-direction: row;

    img {
      width: 55px;
      margin-left: 10px;
      filter: invert(0.15);
      border-radius: 50%;
      box-shadow: 7px 7px 15px #f1efef6b, -7px -7px 15px #ffffff57;

      &:hover {
        box-shadow:  7px 7px 15px #f1efef6b, -7px -7px 15px #efa4a429;
    }
    }

    @media (min-width: 768px) and (max-width: 991px) {
      right: 50px;
    }

    @media (min-width: 992px) {
      right: 150px;
    }


`