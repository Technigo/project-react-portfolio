import React from 'react';
import styled from 'styled-components'

export const Skills = () => {
  return (
    <SkillsOuterWrapper>
      <SkillsInnerWrapper>
        <SkillsHeader> SKILLS </SkillsHeader>
        <SkillContainer>
          <ColumnOne>
            <div>
              <SectionSubHeading>CODE</SectionSubHeading>
              <SkillText>HTML5</SkillText>
              <SkillText>CSS3</SkillText>
              <SkillText>JavaScript ES6</SkillText>
              <SkillText>Styled Components</SkillText>
              <SkillText>React</SkillText>
              <SkillText>Redux</SkillText>
              <SkillText>Node.js</SkillText>
            </div>
          </ColumnOne>
          <ColumnTwo>
            <SectionSubHeading>TOOLBOX</SectionSubHeading>
            <SkillText>VSC</SkillText>
            <SkillText>Github</SkillText>
            <SkillText>Figma</SkillText>
            <SkillText>Slack</SkillText>
          </ColumnTwo>
          <ColumnThree>
            <SectionSubHeading>MORE</SectionSubHeading>
            <SkillText>Ms Office</SkillText>
            <SkillText>Project Management</SkillText>
          </ColumnThree>
        </SkillContainer>
      </SkillsInnerWrapper>
    </SkillsOuterWrapper>
  )
}

export const SectionSubHeading = styled.h3`
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-weight: 800;
    padding-top: 10px;
`
// letter-spacing: 2px;
export const SectionSubSubHeading = styled.h4`
    font-family: 'Roboto', sans-serif;
    color: black;
    font-weight: 600;
    padding-top: 10px;
`

const SkillContainer = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

const SkillText = styled.p`
  font-family: 'Roboto', sans-serif;
`

export const ColumnOne = styled.div`
  
`;

export const ColumnTwo = styled.div`
`;

export const ColumnThree = styled.div`
  
`;

export const SkillTagContainer = styled.div`
  display: flex;
`;

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
  font-size: 20px;
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