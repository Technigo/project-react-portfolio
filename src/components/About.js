import React from 'react'
import { OuterWrapper, InnerWrapper } from './styled/Wrappers'

export const About = () => {
  return (
    <OuterWrapper>
      <InnerWrapper centertext>
        <p>Welcome! My name&apos;s Nick, and I&apos;m an aspiring frontend developer with a
           background in writing and localisation and a passion for problem-solving and languages.
        </p>
        <p>I spent nearly a decade working with natural languages as a freelance technical
         translator, and as my interest in the world of programming languages grew,
          I eventually decided to pursue a career in the tech sector.
        </p>
        <p>I&apos;m currently enrolled in Technigo&apos;s comprehensive Frontend Developer
         Bootcamp and expect to graduate in January 2023.
        </p>
      </InnerWrapper>
    </OuterWrapper>
  )
}