import React from 'react';
import styled from 'styled-components';
import { Container } from './styled-components/GlobalStyles';

const SkillsGroup = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
text-align: center;
grid-row-gap: 2em;
font-family: Roboto;
font-weight: 700;
font-size: 17px;
line-height: 29px;

h4 {
  color:#FA382F;
}
`
const Skills = () => {
  return (
    <section>
      <Container>
        <h2><span>SKILLS</span></h2>
        <SkillsGroup>
          <div>
            <h4>CODE</h4>
            <div>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Redux</p>
              <p>Next.js</p>
              <p>Node.js</p>
              <p>SASS</p>
              <p>Styled Components</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
          <div>
            <h4>TOOLBOX</h4>
            <div>
              <p>Github</p>
              <p>Figma</p>
              <p>Netlify</p>
            </div>
          </div>
          <div>
            <h4>MORE</h4>
            <div>
              <p>Agile methodology</p>
            </div>
          </div>
        </SkillsGroup>
      </Container>
    </section>
  )
}

export default Skills;