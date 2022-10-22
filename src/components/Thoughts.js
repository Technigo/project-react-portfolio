import styled from 'styled-components';
import React from 'react'
import { Wrapper, SectionHeader } from 'components/GlobalStyles'
import blogimg from '../images/blogimg.jpg'

export const Thoughts = () => {
  return (
    <ThoughtsWrapper>
      <SectionHeader>MY THOUGHTS ABOUT CODE</SectionHeader>
      <ThougtImg src={blogimg} alt="blog" />
    </ThoughtsWrapper>
  )
}

export default Thoughts;

const ThoughtsWrapper = styled(Wrapper)`
`

const ThougtImg = styled.img`
    width: 100%;
    display: inherit;
`
