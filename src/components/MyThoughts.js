import React from 'react'
import styled from 'styled-components/macro'
import { ClonedSectionWrapper, HeadH4, InnerWrapper, HeadWrapper } from './styles/MainStyle'

const MyThoughts = () => {
  return (
    <ClonedSectionWrapper>
      <InnerWrapper>
        <HeadWrapper>
          <HeadH4>
            My thoughts
          </HeadH4>
        </HeadWrapper>
        <ThoughtsContainer>
          <p>Stay tuned!</p>
        </ThoughtsContainer>
      </InnerWrapper>
    </ClonedSectionWrapper>
  )
}

export default MyThoughts

const ThoughtsContainer = styled.article`
    text-align: center;
`