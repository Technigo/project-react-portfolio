import React from 'react'
import { OuterWrapper, InnerWrapper } from './styled/Wrappers'

export const About = () => {
  return (
    <OuterWrapper>
      <InnerWrapper centertext>
        <p>Welcome! My name&apos;s Nick, and I&apos;m a frontend developer with a
           background in freelance translation and a knack for problem-solving,
           communication and collaboration.
        </p>
        <p>I spent nearly a decade working with natural languages as a freelance
         translator, and as my interest in the world of programming languages grew,
          I eventually decided to pursue a career in the tech sector.
        </p>
        <p>I&apos;ve taken a project-based approach to learning programming, and samples of my work
          can be found below. I&apos;m currently looking for a junior developer position, and
          I&apos;m always open to learning new things, so if you think I
          might be a good fit for your team, please don&apos;t hesitate to get in touch!
        </p>
      </InnerWrapper>
    </OuterWrapper>
  )
}