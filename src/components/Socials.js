import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';
import Linkedin from '../icons/linkedinwhite.png';
import Github from '../icons/githubwhite.png';

export const Socials = () => {
  const SocialsSection = styled.div`
    text-align: center;
    padding: 0 0 50px 0;
    background-color: lightgrey;
  `;

  const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  `;

  const IconContainer = styled.div`
    margin: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      }
    h3 {
      text-transform: uppercase;
      color: white;
      }
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>
        <SocialsSection>
          {/* <SectionTitle>
            <p>for more</p>
          </SectionTitle> */}
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