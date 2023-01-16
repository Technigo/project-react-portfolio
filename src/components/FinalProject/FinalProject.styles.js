/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'

export const FinalProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }
`

export const ProjectWrapper = styled.article`
  position: relative;

  img {
    width: 100%;
    height: 60vw;
    object-fit: cover;
  }

  &:hover h3,
  &:hover p {
    text-decoration: underline;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    img {
      height: 50vw;
    }
  }

  @media (min-width: 992px) and (max-width: 2559px) {
    img {
      height: 35vw;
    }
  }

  @media (min-width: 2560px) {
    img {
      height: 25vw;
    }
  }
`

export const OverlayImage = styled.div`
  position: absolute;
  width: 100%;
  height: 60vw;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.3s ease;

  h2 {
    color: #ffffff;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 1.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s ease;
  }

  &:hover,
  &:hover h2 {
    background-color: transparent;
    color: transparent;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 50vw;
  }

  @media (min-width: 992px) and (max-width: 2559px) {
    height: 35vw;
  }

  @media (min-width: 2560px) {
    height: 25vw;
  }
`
