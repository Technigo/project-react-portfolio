import React from 'react';
import styled from 'styled-components';

import linkedin from 'assets/linkedin-color-icon.svg'
import github from 'assets/github-icon.svg'
import stack from 'assets/stackoverflow-icon.svg'

import { BlueTitle, InnerWrapperSection, OuterWrapperSection } from 'styles/ProjectStyles';

const MoreInfo = () => {
  const socialLinks = [
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/david-ballester-font-3626bb8a/',
      icon: linkedin
    },
    {
      name: 'github',
      link: 'https://github.com/Fonnt',
      icon: github
    },
    {
      name: 'stackoverflow',
      link: 'https://stackoverflow.com/users/19384589/font',
      icon: stack
    }
  ]

  return (
    <OuterWrapperSection>
      <InnerWrapperSection>
        <BlueTitle tabindex="0">
          FOR MORE
        </BlueTitle>
        <ForMoreWrapper>
          <SocialLinksWrapper>
            {socialLinks.map((socialLink) => {
              return (
                <a
                  href={socialLink.link}
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src={socialLink.icon}
                    alt={socialLink.name} />
                </a>
              )
            })}
          </SocialLinksWrapper>
        </ForMoreWrapper>
      </InnerWrapperSection>
    </OuterWrapperSection>
  )
}
export default MoreInfo;

const ForMoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
const SocialLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4vh;
  margin-bottom: 6vh;
  width: 100%;
  justify-content: center;
  & img {
    margin: 5vw;
    height: 64px;
  }
`