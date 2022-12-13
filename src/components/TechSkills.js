import React from 'react';
import styled from 'styled-components';

import { Wrapper, SectionTitle, MainText } from './GlobalStyles'

export const TechSkills = () => {
  return (
    <Wrapper>
      <SectionTitle>TECH</SectionTitle>
      <TechSkillsName>
        JavaScript, React, Redux, Node JS, MongoDB, Express, RESTful API,
        Styled Components, CSS, HTML,
        Github, Figma, Mob-programming, Agile Methodology.
      </TechSkillsName>
    </Wrapper>
  )
}

const TechSkillsName = styled(MainText)`
  text-align: center;
  margin-top: 5%;

  @media (min-width: 1024px){
    margin-top: 0;
    font-size: 18px;
  }
`
