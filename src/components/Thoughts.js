import styled from 'styled-components';
import React from 'react'
import { Wrapper, SectionHeader } from 'components/GlobalStyles'
import blogimg from '../images/blogimg.jpg'

export const Thoughts = () => {
  return (
    <ThoughtsWrapper>
      <SectionHeader>MY THOUGHTS</SectionHeader>
      <ThougtImg src={blogimg} alt="blog" />
    </ThoughtsWrapper>
  )
}

export default Thoughts;

const ThoughtsWrapper = styled(Wrapper)`
    align-items: center;
`

const ThougtImg = styled.img`
    width: 100%;
    display: inherit;
    opacity: 0.5;

    @media (min-width: 1024px) {    
      width: 700px;
      margin-bottom: 40px;
      margin-top: 20px;
}
`
