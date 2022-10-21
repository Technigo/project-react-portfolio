import React from 'react'
import { SectionHeading } from './styled/Headings'
import { IconGroup, SoMeIcon } from './styled/Icons'
import { InnerWrapper, OuterWrapper } from './styled/Wrappers'

export const ForMore = () => {
  return (
    <OuterWrapper id="for-more">
      <InnerWrapper>
        <SectionHeading>FOR MORE</SectionHeading>
        <IconGroup>
          <a href="https://linkedin.com/in/jnbjensen">
            <SoMeIcon
              title="My LinkedIn profile"
              alt="link to Niclas' LinkedIn profile"
              src="images/icon-linkedin.png" />
          </a>
          <a href="https://github.com/jnbjensen">
            <SoMeIcon
              title="My GitHub profile"
              alt="link to Niclas' GitHub profile"
              src="images/icon-github.png" />
          </a>
          <a href="https://stackoverflow.com/users/19388159/niclas-jensen">
            <SoMeIcon
              title="My StackOverflow profile"
              alt="link to Niclas' StackOverflow profile"
              src="images/icon-stackoverflow.png" />
          </a>
        </IconGroup>
      </InnerWrapper>
    </OuterWrapper>
  )
}