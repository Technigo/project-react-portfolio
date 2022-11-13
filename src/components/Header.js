import React from 'react';
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import Banner from '../assets/Banner.jpg'
import Annika from '../assets/Annika.jpg'
import { InnerWrapper, OuterWrapper } from './global/GlobalStyling';

export const Header = () => {
  return (
    <OuterWrapper>
      <HeaderBackground>
        <InnerWrapper>
          <IconWrapper>
            <a
              href="https://github.com/agadman"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" color="var(--color-white)" />
            </a>
            <a
              href="https://se.linkedin.com/in/annika-gadman-85238a123"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="var(--color-white)" />
            </a>
          </IconWrapper>
          <HeaderText>
            <h2>portfolio annika gadman</h2>
            <h1>frontend developer</h1>
            <h3>code + design</h3>
          </HeaderText>
          <ProfileImageWrapper>
            <ProfileImage src={Annika} alt="headshot of Annika" />
          </ProfileImageWrapper>
        </InnerWrapper>
      </HeaderBackground>
    </OuterWrapper>
  )
}

const HeaderBackground = styled.header`
    position: relative;
    height: 70vh;
    width: 100%;
    background: linear-gradient(rgba(82, 81, 81, 0.2), rgba(0, 0, 0, 0.5)), url(${Banner});
    background-repeat: no-repeat;background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
`

const HeaderText = styled.div`
    h2 {
        font-size: 1.1rem;
        font-weight: 500;
        font-family: 'Roboto';
        text-transform: uppercase;
        padding: 30px 0 0 3px;
        color: var(--color-white);
        text-shadow: 1px 1px 2px #333;

        @media (min-width: 667px) {
          font-size: 1.5rem;
        }
    }

    h1 {
        font-size: 24px;
        font-weight: 500;
        font-family: 'Roboto';
        text-transform: uppercase;
        padding-left: 3px;
        color: var(--color-white);
        text-shadow: 1px 1px 2px #333;
     
        @media (min-width: 667px) {
          font-size: 52px;
        }
    }

    h3 {
        font-size: 1.1rem;
        font-weight: 500;
        font-family: 'Roboto';
        text-transform: uppercase;
        padding-left: 3px;
        color: var(--color-white);
        text-shadow: 1px 1px 2px #333;

        @media (min-width: 667px) {
          font-size: 1.5rem;
        }
    }
`
const ProfileImageWrapper = styled.div`
    position: absolute;
    overflow: hidden;
    height: 200px;
    width: 200px;
    border: 2px solid #fff;
    border-radius: 50%;
    z-index: 1;
    bottom: -20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    @media (min-width: 667px) {
      height: 250px;
      width: 250px;
      margin-right: 0;
      right: 15%;
    }

    @media (min-width: 1024px) {
      height: 250px;
      width: 250px;
      margin-right: 0;
      right: 15%;
    }
`

const ProfileImage = styled.img`
    width: 100%;
  `

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    place-items: flex-end;

    @media (min-width: 667px) {
      justify-content: end;
    }
    
    a {
      margin: 10px;
      transition: all 0.2s ease-in-out;
      
      &:hover {
        transform: scale(1.1);
      }
    }
  `