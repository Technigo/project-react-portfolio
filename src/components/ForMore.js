import React from 'react';
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { InnerWrapper, OuterWrapper, SiteSection, SectionTitle } from './global/GlobalStyling';

export const ForMore = () => {
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
    `
  return (
    <OuterWrapper backgroundLightGrey>
      <InnerWrapper>
        <SiteSection>
          <SectionTitle>
            <p>for more</p>
          </SectionTitle>
          <IconWrapper>
            <IconContainer>
              <a
                href="https://github.com/agadman"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="3x" color="#333" />
              </a>
              <p>Github</p>
            </IconContainer>
            <IconContainer>
              <a
                href="https://www.linkedin.com/in/annika-gadman-85238a123/"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0a66c2" />
              </a>
              <p>LinkedIn</p>
            </IconContainer>
            <IconContainer>
              <a
                href="https://stackoverflow.com/users/19438256/annika"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  size="3x"
                  color="#416586" />
              </a>
              <p>Stackoverflow</p>
            </IconContainer>
          </IconWrapper>
        </SiteSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}