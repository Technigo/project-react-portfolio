import styled from 'styled-components';
import React from 'react'
import { Wrapper, SectionHeader } from 'components/GlobalStyles'

export const Tech = () => {
  return (
    <SkillsWrapper>
      <SectionHeader>TECH</SectionHeader>
      <TechText>
        <p>
        HTML5, CSS, JavaScript, Github, Mob programming, React,
        pair-programming, API:s, Web accessability, Flexbox.
        </p>
      </TechText>
    </SkillsWrapper>
  )
}

export default Tech;

const SkillsWrapper = styled(Wrapper)`
    align-items: center;
`

const TechText = styled.p`
    position: relative;
    width: 320px;
    font-size: 17px;
    line-height: 29px;
    text-align: center;
`