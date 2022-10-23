import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle } from './reusable/Wrappers';
import Linkedin from '../icons/linkedin602.png';
import Github from '../icons/github602.png';

export const Socials = () => {
  const SocialsSection = styled.div`
    text-align: center;
    padding: 50px 0;
    background-color: white;
  `
  const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `
  const IconContainer = styled.div`
    margin: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        }
    h3 {
        color: #c8aa89c6;
        text-transform: uppercase;
        }
    `
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SocialsSection>
          <SectionTitle>
            <p>for more</p>
          </SectionTitle>
          <IconWrapper>
            <IconContainer>
              <a
                href="https://www.linkedin.com/in/carolinesoderstrom/"
                target="_blank"
                rel="noreferrer">
                <img
                  src={Linkedin}
                  alt="Linkedin Caroline Soderstrom" />
              </a>
              <h3>linkedin</h3>
            </IconContainer>
            <IconContainer>
              <a
                href="https://github.com/SoderstromC"
                target="_blank"
                rel="noreferrer">
                <img
                  src={Github}
                  alt="Github Caroline Soderstrom" />
              </a>
              <h3>github</h3>
            </IconContainer>
          </IconWrapper>
        </SocialsSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}