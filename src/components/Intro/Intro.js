/* eslint-disable linebreak-style */
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { SectionContainer, SectionText } from 'Globalstyles';

const Intro = () => {
  return (
    <SectionContainer>
      <SectionText>
        <Player
          src="https://assets7.lottiefiles.com/packages/lf20_2z4qmxlj.json"
          style={{ width: '35px', height: '35px', float: 'left' }}
          loop
          autoplay
          speed={1} /> Hello! I`m a student at Technigo and will be a graduated frontend
          developer in january 2023. I have worked for nearly 10 years in media
          and recently as a programmatic trader. I love that you can be so
          creative with code and I have a good eye for design and the use of CSS.
          I am a very fast learner that thrive in a team who help each other and have fun.
      </SectionText>
    </SectionContainer>
  )
}

export default Intro;