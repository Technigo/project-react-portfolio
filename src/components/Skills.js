import React from 'react';
import styled from 'styled-components';

export const Skills = ({ color, backColor }) => {
  return (
    <OuterWrapper backColor={backColor}>
      <InnerWrapper>
        <SkillsText color={color}>SKILLS</SkillsText>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.section`
background-color: ${(props) => props.backColor};
display: flex;
flex-direction: column;
align-items: center;
width: auto;
height: auto;
`

const InnerWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
margin: 0 auto;
`

const SkillsText = styled.h2`
background-color: ${(props) => props.color};
color: white;
font-family: 'Montserrat', sans-serif;
display: inline-block;
font-size: 22px;
line-height: 1;
padding: 5px 10px;
margin: 20px 0 20px 0;
line-height: 1;
}
`;