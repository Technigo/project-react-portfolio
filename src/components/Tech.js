import React from 'react'
import { SectionHeading } from './styled/Headings'
import { OuterWrapper, InnerWrapper } from './styled/Wrappers'
import { TechStack } from './styled/TechStack'

export const Tech = () => {
  return (
    <OuterWrapper id="tech-section">
      <InnerWrapper centertext>
        <SectionHeading>TECH</SectionHeading>
        <TechStack>
          <div>
            <img title="HTML" alt="HTML logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            <p>HTML</p>
          </div>
          <div>
            <img title="CSS" alt="CSS logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            <p>CSS</p>
          </div>
          <div>
            <img title="Bootstrap" alt="Bootstrap logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
            <p>Bootstrap</p>
          </div>
          <div>
            <img title="LESS" alt="LESS logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" />
            <p>LESS</p>
          </div>
          <div>
            <img title="Tailwind" alt="Tailwind logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
            <p>Tailwind CSS</p>
          </div>
          <div>
            <img title="Webflow" alt="Webflow logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg" />
            <p>Webflow</p>
          </div>
          <div><img title="Wordpress" alt="Wordpress logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg" />
            <p>Wordpress</p>
          </div>
          <div>
            <img title="Javascript (ES6)" alt="Javascript logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <p>JavaScript (ES6)</p>
          </div>
          <div>
            <img title="React" alt="React logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            <p>React</p>
          </div>
          <div>
            <img title="Redux" alt="Redux logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
            <p>Redux</p>
          </div>
          <div>
            <img title="node.js" alt="node.js logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            <p>Node.js</p>
          </div>
          <div>
            <img title="MongoDB" alt="MongoDB logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            <p>MongoDB</p>
          </div>
        </TechStack>
      </InnerWrapper>
    </OuterWrapper>
  )
}