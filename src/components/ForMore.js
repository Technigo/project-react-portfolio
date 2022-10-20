import React from 'react'
import { SectionHeader } from './styled/SectionHeader'
import { IconGroup } from './styled/IconGroup'
import { Icon } from './styled/Icon'

export const ForMore = () => {
  return (
    <section className="outer-wrapper" id="for-more">
      <div className="inner-wrapper">
        <SectionHeader>FOR MORE</SectionHeader>
        <IconGroup>
          <a href="https://linkedin.com/in/jnbjensen">
            <Icon
              title="My LinkedIn profile"
              alt="link to Niclas' LinkedIn profile"
              src="images/icon-linkedin.png" />
          </a>
          <a href="https://github.com/jnbjensen">
            <Icon
              title="My GitHub profile"
              alt="link to Niclas' GitHub profile"
              src="images/icon-github.png" />
          </a>
          <a href="https://stackoverflow.com/users/19388159/niclas-jensen">
            <Icon
              title="My StackOverflow profile"
              alt="link to Niclas' StackOverflow profile"
              src="images/icon-stackoverflow.png" />
          </a>
        </IconGroup>
      </div>
    </section>
  )
}