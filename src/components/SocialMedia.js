import React from 'react';
import styled from 'styled-components';
import { LINKEDIN_URL, STACKOVERFLOW_URL, GITHUB_URL } from 'utils/Urls';
import { Wrapper, SectionTitle, IconLink } from './GlobalStyles';

export const SocialMedia = () => {
  return (
    <Wrapper>
      <SectionTitle>FIND ME</SectionTitle>
      <SocialMediaContainer>
        <SocialMediaLink
          primary
          type="button"
          href={LINKEDIN_URL}
          target="_blank">
          <img
            src="images/linkedin.png"
            alt="LinkedIn icon for the header" />
          <p>Linkedin</p>
        </SocialMediaLink>

        <SocialMediaLink
          primary
          type="button"
          href={GITHUB_URL}
          target="_blank">
          <img
            src="images/github.png"
            alt="Github icon for the header" />
          <p>Github</p>
        </SocialMediaLink>

        <SocialMediaLink
          primary
          type="button"
          href={STACKOVERFLOW_URL}
          target="_blank">
          <img
            src="images/stack-overflow.png"
            alt="Stack Overflow icon for the header" />
          <p>Stack Overflow</p>
        </SocialMediaLink>

      </SocialMediaContainer>
    </Wrapper>
  )
}

const SocialMediaContainer = styled.section`
display: grid;
grid-template-columns: 33% 33% 33%;
margin-top: 10%;
  img{
    filter: invert(1);
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    margin: 5% 10% 0 10%;
  }

  @media (min-width: 1024px){
    margin: 5% 10% 0 10%;
`

const SocialMediaLink = styled(IconLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-align: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin: 10px 5px 0 5px;
  transition: transform .8s; 

      &:hover{
        transform: scale(0.95);
  }

  p{
    margin-top: 15%;
  }

@media (min-width: 600px) and (max-width: 1023px) {
  font-size: 15px;
  margin: 10px 5px 0 5px;
  p{
    margin-top: 10%; 
    background-color: #ccd6d6;
    display: inline-block;
    padding: 5px;
    color: #003333;
    }
  }

@media (min-width: 1024px){
  font-size: 18px;
  margin: 10px 5px 0 5px;
  p{
    margin-top: 10%; 
    background-color: #ccd6d6;
    display: inline-block;
    padding: 5px;
    color: #003333;
   }
`