import React from 'react';
import styled from 'styled-components';

export const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsText>SKILLS</SkillsText>
    </SkillsContainer>
  )
}

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    background: #f4f4f457;
`;

export const SkillsText = styled.h3`
    width: 100px;
    height: 27px;
    background: #FA382F;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
`;