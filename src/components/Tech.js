import styled from 'styled-components';
import React from 'react'
import { Section, SectionHeader } from 'components/Section';

export const Tech = () => {
  return (
    <Section>
      <SectionHeader>TECH</SectionHeader>
      <TechText>
        <p>
        HTML5, CSS, JavaScript, Github, Mob programming, React,
        pair-programming, API:s, Web accessability, Flexbox.
        </p>
      </TechText>
    </Section>
  )
}

export default Tech;

const TechText = styled.p`
    position: relative;
    width: 320px;
    font-size: 17px;
    line-height: 29px;
    text-align: center;
`