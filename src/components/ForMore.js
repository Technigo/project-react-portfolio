/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { SectionContainer, SectionHeadings } from './Globalstyles';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const ForMore = () => {
  return (
    <SectionContainer bgcolor="#f4f4f4">
      <SectionHeadings>FOR MORE</SectionHeadings>
      <ForMoreSection>
        <a href="https://www.aftonbladet.se/" role="button" aria-pressed="false" aria-label="LinkedIn logo" target="_blank" rel="noreferrer">
          <img className="social-icon" src={github} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/YoTesfam" role="button" aria-pressed="false" aria-label="Github logo" target="_blank" rel="noreferrer">
          <img className="social-icon" src={linkedin} alt="Github logo" />
        </a>
      </ForMoreSection>
    </SectionContainer>
  )
}

export default ForMore;

const ForMoreSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    img {
    padding: 20px;
    width: 40px;
    margin: 3px 2px;
    float: right;
    transition: all 0.2s ease-in-out;


    &:hover {
        transform: scale(1.05);
    }
    }
`