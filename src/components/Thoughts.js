import styled from 'styled-components';
import React from 'react'
import { Section, SectionHeader } from 'components/Section'
import blogimg from '../images/blogimg.jpg'

export const Thoughts = () => {
  return (
    <Section>
      <SectionHeader>MY THOUGHTS ABOUT CODE</SectionHeader>
      <ThougtImg src={blogimg} alt="blog" />
    </Section>
  )
}

export default Thoughts;

const ThougtImg = styled.img`
    width: 100%;
    display: inherit;
`
