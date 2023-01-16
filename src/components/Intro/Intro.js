/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-quotes */
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { SectionContainer, SectionText } from 'Globalstyles'

const Intro = () => {
  return (
    <SectionContainer>
      <SectionText>
        <Player
          src='https://assets7.lottiefiles.com/packages/lf20_2z4qmxlj.json'
          style={{ width: '35px', height: '35px', float: 'left' }}
          loop
          autoplay
          speed={1}
        />
        Hello! I <span>&apos;</span>m a Frontend Developer who changed career last year. I have
        worked for nearly 10 years in media, before code became my new passion, and most recently as
        a team leader of programmatic traders. I love that you can be so creative with code and I
        have a really good eye for design and the use of CSS. I am a very fast learner that thrive
        in a team who help each other and have fun.
      </SectionText>
    </SectionContainer>
  )
}

export default Intro
