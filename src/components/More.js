import styled from 'styled-components';
import React from 'react'
import { Section, SectionHeader } from 'components/Section'

export const More = () => {
  return (
    <Section>
      <SectionHeader>MORE</SectionHeader>
      <MoreText>
        <p>
        More
        </p>
      </MoreText>
    </Section>
  )
}

export default More;

const MoreText = styled.p`
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    margin: 0px auto 30px;
    width: 320px;
`