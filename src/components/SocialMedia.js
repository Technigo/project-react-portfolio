import React from 'react';
import styled from 'styled-components';
import { LINKEDIN_URL, STACKOVERFLOW_URL, GITHUB_URL } from 'utils/Urls';
import { Wrapper, SectionTitle, IconButton } from './GlobalStyles';

export const SocialMedia = () => {
  return (
    <Wrapper>
      <SectionTitle>FIND ME</SectionTitle>
      <SocialMediaContainer>
        <IconButton
          primary
          type="button"
          href={LINKEDIN_URL}
          target="_blank">
          <img
            src="images/linkedin.png"
            alt="LinkedIn icon for the header" />
        </IconButton>
        <IconButton
          primary
          type="button"
          href={GITHUB_URL}
          target="_blank">
          <img
            src="images/github.png"
            alt="Github icon for the header" />
        </IconButton>
        <IconButton
          primary
          type="button"
          href={STACKOVERFLOW_URL}
          target="_blank">
          <img
            src="images/stack-overflow.png"
            alt="Stack Overflow icon for the header" />
        </IconButton>
      </SocialMediaContainer>
    </Wrapper>
  )
}

const SocialMediaContainer = styled.section`
  margin-top: 5%;
  img{
    filter: invert(1);
  }
`