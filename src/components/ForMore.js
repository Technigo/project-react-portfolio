import React from 'react'
import { SectionHeader } from './styled/SectionHeader'

export const ForMore = () => {
  return (
    <section className="outer-wrapper" id="for-more">
      <div className="inner-wrapper">
        <SectionHeader>FOR MORE</SectionHeader>
        <div className="findme-icons">
          <a href="https://linkedin.com/in/jnbjensen">
            <img className="footer-findme-icon" title="My LinkedIn profile" alt="link to Niclas' LinkedIn profile" src="img/icon-linkedin.png" />
          </a>
          <a href="https://github.com/jnbjensen">
            <img className="footer-findme-icon" title="My GitHub profile" alt="link to Niclas' GitHub profile" src="img/icon-github.png" />
          </a>
          <a href="https://stackoverflow.com/users/19388159/niclas-jensen">
            <img className="footer-findme-icon" title="My StackOverflow profile" alt="link to Niclas' StackOverflow profile" src="img/icon-stackoverflow.png" />
          </a>
        </div>
      </div>
    </section>
  )
}