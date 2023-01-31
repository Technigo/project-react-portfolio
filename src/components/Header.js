import React from 'react'
import { HeaderHeading } from './styled/Headings'
import { ProfileImage } from './styled/ProfileImage'
import { IconGroup, SoMeIcon } from './styled/Icons'
import { HeaderOuterWrapper, InnerWrapper } from './styled/Wrappers'

export const Header = () => {
  return (
    <HeaderOuterWrapper>
      <InnerWrapper>
        <IconGroup header>
          <a href="https://linkedin.com/in/jnbjensen">
            <SoMeIcon
              header
              title="My LinkedIn profile"
              alt="link to Niclas' LinkedIn profile"
              src="images/icon-linkedin.png" />
          </a>
          <a href="https://github.com/jnbjensen">
            <SoMeIcon
              header
              title="My GitHub profile"
              alt="link to Niclas' GitHub profile"
              src="images/icon-github.png" />
          </a>
        </IconGroup>

        <HeaderHeading>
          <h1>PORTFOLIO: NICLAS JENSEN</h1>
          <h2>frontend developer</h2>
          <h2>+ language specialist</h2>
        </HeaderHeading>
        <ProfileImage>
          <img src="images/profile-image.jpg" alt="Profile" />
        </ProfileImage>
      </InnerWrapper>
    </HeaderOuterWrapper>
  )
}