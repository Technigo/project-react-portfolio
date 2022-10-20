import React from 'react'
import { IconGroup } from './styled/IconGroup'
import { Icon } from './styled/Icon'
import { HeaderOuterWrapper, InnerWrapper } from './styled/Wrappers'

export const Header = () => {
  return (
    <HeaderOuterWrapper>
      <InnerWrapper>
        <IconGroup header>
          <a href="https://linkedin.com/in/jnbjensen">
            <Icon
              header
              title="My LinkedIn profile"
              alt="link to Niclas' LinkedIn profile"
              src="images/icon-linkedin.png" />
          </a>
          <a href="https://github.com/jnbjensen">
            <Icon
              header
              title="My GitHub profile"
              alt="link to Niclas' GitHub profile"
              src="images/icon-github.png" />
          </a>
          <a href="https://stackoverflow.com/users/19388159/niclas-jensen">
            <Icon
              header
              title="My StackOverflow profile"
              alt="link to Niclas' StackOverflow profile"
              src="images/icon-stackoverflow.png" />
          </a>
        </IconGroup>

        <div id="header-text">
          <h1>PORTFOLIO: NICLAS JENSEN</h1>
          <h2 id="big-h2">frontend developer</h2>
          <h2 id="small-h2">+ language specialist</h2>
        </div>
        <div id="profile-image">
          <img src="images/profile-image.jpg" alt="Profile" />
        </div>
      </InnerWrapper>
    </HeaderOuterWrapper>
  )
}