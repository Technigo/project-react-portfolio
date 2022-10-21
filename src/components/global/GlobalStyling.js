import React from 'react';
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons'

export const OuterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.background ? ' #F4F4F4' : 'white')};
`
export const InnerWrapper = styled.div`
    width: 75%;
    margin: 0 auto;
`

export const SectionTitle = styled.div`
    padding: 1px;   
    background-color: #0A638E;
    color: white;
    margin: 0 auto;
    border-radius: 8px;
    width: 200px;
    text-transform: uppercase;
    font-family: 'Montserrat';
    text-align: center;
    font-weight: 600;
`

export const Tag = styled.div`
    display: flex;
    flex-wrap: wrap;

    p {
    background: #18252a;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    font-family: 'Roboto', sans-serif ;
    font-weight: bold;
    text-decoration: none;
    line-height: 12px;
    padding: 5px;
    margin: 3px;
  }
`
export const Icons = () => {
  const IconWrapper = styled.div`
        display: flex;
        flex-direction: row;
        padding: 20px;
        flex-wrap: wrap;
        justify-content: space-evenly;
`
  const IconContainer = styled.div`
    margin: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
    `
  return (
    <IconWrapper>
      <IconContainer>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" color="#212427" />
        </a>
        <p>Github</p>
      </IconContainer>
      <IconContainer>
        <a
          href="https://www.linkedin.com/in/lovisa-carling/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="3x" color="#212427" />
        </a>
        <p>LinkedIn</p>
      </IconContainer>
      <IconContainer>
        <a
          href="https://stackoverflow.com/users/16687109/asivol"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faStackOverflow}
            size="3x"
            color="#212427" />
        </a>
        <p>Stackoverflow</p>
      </IconContainer>
    </IconWrapper>
  )
};