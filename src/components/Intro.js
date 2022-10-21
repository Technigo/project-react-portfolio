import React from 'react';
import styled from 'styled-components'

const IntroStyle = styled.p`
 padding: 20px;  
 `

const Intro = () => {
  return (
    <IntroStyle>
      <p>I am a creative web developer and designer with a background in education.
        My objective now is to use my creativity, problem solution mindset and knowledge about
        learning to help others transmit their messages and communicate.
      </p>
    </IntroStyle>

  )
}

export default Intro;
