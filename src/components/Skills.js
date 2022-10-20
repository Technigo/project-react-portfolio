import React from 'react';
import { Container } from './styled-components/GlobalStyles';

const Skills = () => {
  return (
    <section>
      <Container>
        <h2><span>SKILLS</span></h2>
        <div className="all-skills-group">
          <div>
            <h4 className="skills-subheading">CODE</h4>
            <div>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Next.js</p>
              <p>SASS</p>
              <p>Node.js</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
          <div>
            <h4 className="skills-subheading">TOOLBOX</h4>
            <div>
              <p>Github</p>
              <p>Figma</p>
              <p>Netlify</p>
            </div>
          </div>
          <div>
            <h4 className="skills-subheading">MORE</h4>
            <div>
              <p>Agile methodology</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills;