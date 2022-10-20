import React from 'react';
import { Hidden, Container } from './styled-components/GlobalStyles';

const More = ({ lnIcon, gitHubIcon, discordIcon }) => {
  return (
    <section>
      <Container>
        <h2><span>FOR MORE</span></h2>
        <div className="end-icons-wrapper">
          <div className="icon-element">
            <a
              title="Antonella's LinkedIn"
              tabIndex="0"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/antonella-cardozo-187562b7/">
              <img
                src={lnIcon}
                alt="linkedin icon" />
              <Hidden LinkedIn />
            </a>
            <p>LINKEDIN</p>
          </div>
          <div className="icon-element">
            <a
              title="link to Antonella's GitHub"
              tabIndex="0"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Sailornina">
              <img
                src={gitHubIcon}
                alt="github icon" />
              <Hidden GITHUB />
            </a>
            <p>GITHUB</p>
          </div>
          <div className="icon-element">
            <a
              title="link to Antonella's Github"
              tabIndex="0"
              target="_blank"
              rel="noreferrer"
              href="http://discordapp.com/users/Sailornina">
              <img
                src={discordIcon}
                alt="discord icon" />
              <Hidden DISCORD />
            </a>
            <p>DISCORD</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default More;