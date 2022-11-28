/* eslint-disable linebreak-style */
import React from 'react'
import { SectionContainer, SectionHeadings } from 'Globalstyles';
import { ForMoreSocialBar } from './ForMore.styles';

const ForMore = () => {
  return (
    <SectionContainer>
      <SectionHeadings>FOR MORE</SectionHeadings>
      <ForMoreSocialBar>
        <a href="https://www.linkedin.com/in/sofierydmark/" role="button" aria-pressed="false" aria-label="linkedin-profile" target="_blank" rel="noreferrer">
          <img src="images/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://github.com/SofieRydmark" role="button" aria-pressed="false" aria-label="github-profile" target="_blank" rel="noreferrer">
          <img src="images/github.svg" alt="github" />
        </a>
        <a href="https://stackoverflow.com/c/technigo/users/394/" role="button" aria-pressed="false" aria-label="stackOverflow-profile" target="_blank" rel="noreferrer">
          <img src="images/stackOverflow.svg" alt="stackOverflow" />
        </a>
      </ForMoreSocialBar>
    </SectionContainer>
  )
}

export default ForMore;