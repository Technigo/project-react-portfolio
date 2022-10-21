import React from 'react'
import styled from 'styled-components'
import { Heading, InnerWrapper, OuterWrapper } from './Styling'
import typewriter from './images/thoughts/typewriter.jpg'

export const Thoughts = () => {
  return (
    <OuterWrapper>
      <Heading dark>THOUGHTS</Heading>
      <InnerWrapper>
        <ThoughtsContent>

          <ThoughtsContainer>
            <ThoughtsLink href="https://medium.com/@maria_westling/">
              <ThoughtsImage src={typewriter} alt="Link to blog" />
            </ThoughtsLink>
            <ThoughtsHeader>How I went from Conservation to Web development.
            </ThoughtsHeader>
            <p>
              I knew it was gonna be intense. But I had no idea.
              These weeks have been quite a rollercoaster. One week you feel like a freaking genius,
              the next like a total loser. Aaaand repeat. Highs and lows, ups and downs.
              It sure isn’t easy to change direction in life, but you sure do feel alive.
            </p>
          </ThoughtsContainer>

          <ThoughtsContainer>
            <ThoughtsLink href="https://medium.com/@maria_westling/">
              <ThoughtsImage src={typewriter} alt="Link to blog" />
            </ThoughtsLink>

            <ThoughtsHeader>How I went from Conservation to Web development.
            </ThoughtsHeader>
            <p>
              I knew it was gonna be intense. But I had no idea.
              These weeks have been quite a rollercoaster. One week you feel like a freaking genius,
              the next like a total loser. Aaaand repeat. Highs and lows, ups and downs.
              It sure isn’t easy to change direction in life, but you sure do feel alive.
            </p>
          </ThoughtsContainer>
        </ThoughtsContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const ThoughtsContent = styled.div`
display: grid;
grid-template-columns: 1fr;
font-family:'Roboto', sans-serif;
line-height: 30px;
margin-bottom: 20px;

@media (min-width: 1025px) {
grid-template-columns: repeat(2, 1fr);
column-gap: 5%;
  }
`

export const ThoughtsContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
margin-bottom: 30px;
`
export const ThoughtsLink = styled.a`

a:visited {
  text-decoration: none;
}

`
export const ThoughtsImage = styled.img`
width: 100%;
border: 2px solid #D36B00;
border-radius: 10px;
opacity: 0.7;
&: hover {
  opacity: 1;
}
`
export const ThoughtsHeader = styled.h4`
font-size: 20px;
font-weight: 700;
`