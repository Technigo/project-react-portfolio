import styled from 'styled-components';
import React from 'react'
import { Section, SectionHeader } from 'components/Section'

export const Thoughts = () => {
  return (
    <Section>
      <SectionHeader>MY THOUGHTS ABOUT CODE</SectionHeader>
      <ThoughtsText>
        <p>
        Thoughts
        </p>
      </ThoughtsText>
    </Section>
  )
}

export default Thoughts;

const ThoughtsText = styled.p`
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    margin: 0px auto 30px;
    width: 320px;
`