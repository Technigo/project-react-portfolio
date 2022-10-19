import React from 'react';

const Skills = () => {
  return (
    <section>
      <div className="container">
        <h2 className="heading-text"><span>SKILLS</span></h2>
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
      </div>
    </section>
  )
}

export default Skills;