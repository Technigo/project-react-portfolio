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
        <p>I graduated from Technigo&apos;s comprehensive Frontend Developer
         Bootcamp in January 2023, and I&apos;m currently looking for a
         role in a workplace with a great learning environment.
        </p>
      </InnerWrapper>
    </OuterWrapper>
  )
}