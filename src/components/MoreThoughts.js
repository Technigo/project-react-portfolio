import React from 'react'
import styled from 'styled-components'
import { Heading, InnerWrapper, OuterWrapper } from './Styling'

export const MoreThoughts = () => {
  return (
    <OuterWrapper>
      <Heading>MORE THOUGHTS</Heading>
      <InnerWrapper>
        <MoreThoughtsHeader>Stay tuned for more content here!</MoreThoughtsHeader>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const MoreThoughtsHeader = styled.h4`
font-family:'Roboto', sans-serif;
font-size: 20px;
font-weight: 700;
`