import React from 'react';
import styled from 'styled-components'

export const Skills = () => {
  return (
    <SkillsOuterWrapper>
      <SkillsInnerWrapper>
        <SkillsHeader> SKILLS </SkillsHeader>
      </SkillsInnerWrapper>
    </SkillsOuterWrapper>
  )
}

export const SkillsOuterWrapper = styled.div`
  background-color: #FFF;
  width: 100%;
  margin: 0 auto 80px auto;
  padding-bottom: 80px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

export const SkillsInnerWrapper = styled.div`
width:80%;
display: flex;
flex-direction:column;
justify-content:center;
`;

const SkillsHeader = styled.h2`
  font-size: 48px;
  line-height: 1;
  padding: 10px 15px;
  margin: 40px auto 60px auto;
  font-family: 'Montserrat', sans-serif;
  background-color: #262626;;
  color: white;
  display: inline-block;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 1;
    padding: 10px 15px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
     margin-top: 60px;
     font-size: 40px;
  }
`;