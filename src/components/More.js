import React from 'react';
import styled from 'styled-components';
import { InnerWrapper, OuterWrapper } from 'StyledComponents/GlobalStyles';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';
import { SocialMediaContainer } from 'StyledComponents/SocialMediaContainer'
import GitHubIcon from '../Images/github-header-icon.png'
import LinkedinIcon from '../Images/linkedin-header-icon.png'
import StackIcon from '../Images/stack-header-icon.png'

const More = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>FOR MORE</SectionHeading>
        <SoMeContainer>
          <a href="https://github.com/jesshansson">
            <img src={GitHubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/jesshansson/">
            <img src={LinkedinIcon} alt="LinkedIn icon" />
          </a>
          <a href="https://stackoverflow.com/users/19466381/jessica">
            <img src={StackIcon} alt="StackOverflow icon" />
          </a>
        </SoMeContainer>
      </InnerWrapper>
    </OuterWrapper>
  )
}
export default More;

const SoMeContainer = styled(SocialMediaContainer)`

  img {
    padding: 10px;
    width: 80%;
    filter: invert(47%) sepia(18%) saturate(1011%) hue-rotate(271deg) brightness(95%) contrast(89%);
    
    &:hover {
     transform: scale(1.1);

    }
  }

  @media (max-width: 668px) {
    
    img {
    width: 60%;
    }
  }
  `

