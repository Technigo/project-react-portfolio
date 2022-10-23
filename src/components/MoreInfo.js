import React from 'react';
import styled from 'styled-components/macro';

import linkedInIcon from 'assets/linkedin-color-icon.svg'
import gitHubIcon from 'assets/github-icon.svg'
import stackOverflowIcon from 'assets/stackoverflow-icon.svg'

import { BlueTitle, InnerWrapperSection, OuterWrapperSection } from 'styles/ProjectStyles';
import { gitHubLink, linkedInLink, stackOverflowLink } from 'utils/Urls';

const MoreInfo = () => {
  const socialLinks = [
    {
      name: 'linkedin',
      link: linkedInLink,
      icon: linkedInIcon
    },
    {
      name: 'github',
      link: gitHubLink,
      icon: gitHubIcon
    },
    {
      name: 'stackoverflow',
      link: stackOverflowLink,
      icon: stackOverflowIcon
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
                  rel="noreferrer"
                  key={socialLink.name}>
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
    @media (min-width: 1024px) {
      :hover {
        filter: brightness(75%);
        transform: scale(1.05)
      }
    }
  }
`