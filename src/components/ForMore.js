import React from 'react';
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { InnerWrapper, OuterWrapper, SectionTitle } from './global/GlobalStyling';

export const ForMore = () => {
  const ForMoreSection = styled.div`
    text-align: center;
    padding: 50px 0;
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
    `
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ForMoreSection>
          <SectionTitle>
            <p>for more</p>
          </SectionTitle>
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
        </ForMoreSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}