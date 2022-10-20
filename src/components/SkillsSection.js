import React from 'react';
import { Section, SectionTitle, TextWrapper } from 'styledcomponents/Section';
import styled from 'styled-components'

const SkillSection = () => {
  return (
    <Section>
      <SectionTitle>SKILLS</SectionTitle>
      <CenterSkills>
        <SkillWrapper>
          <SkillsBox>
            <h5> CODE </h5>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Node.js</li>
              <li>🔜 Redux</li>
            </ul>
          </SkillsBox>
          <SkillsBox>
            <h5>Toolbox</h5>
            <ul>
              <li>Figma & Figjam</li>
              <li>Adobe Photoshop</li>
              <li>Canva</li>
              <li>Slack</li>
              <li>Github</li>
              <li>VScode</li>
              <li>Adobe Illustrator</li>
            </ul>
          </SkillsBox>
        </SkillWrapper>
      </CenterSkills>
    </Section>
  );
};
export default SkillSection;

const CenterSkills = styled(TextWrapper)`
@media (min-width: 700px) {
padding-left: 20%;
padding-right: 20%;
}
`

const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  grid-gap: 50px;
  @media (max-width: 400px) {
    grid-gap: 20px;
  }
`
const SkillsBox = styled.div`
  text-align: center;
  margin: 0;
  ul {
    list-style: none;
    display: inline;
    text-align: center;
    line-height: 25px;
  }
  li {
    font-size: 18px;
  }
  h5 {
    text-transform: uppercase;
    font-size: 20px;
    margin: 4px;
  }
`;
