import React from 'react';
import styled from 'styled-components';
import { Container, Hidden } from './styled-components/GlobalStyles';

const MoreContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
`
const IconsMore = styled.div`
justify-self: center;
text-align: center;
font-size: 11px;

p {
    line-height: 50px;
    font-weight: bold;
    color:var(--main-peach);
`

const More = ({ lnIcon, gitHubIcon, discordIcon }) => {
  return (
    <section>
      <Container>
        <h2><span>FOR MORE</span></h2>
        <MoreContainer>
          <IconsMore>
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
          </IconsMore>
          <IconsMore>
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
          </IconsMore>
          <IconsMore>
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
          </IconsMore>
        </MoreContainer>
      </Container>
    </section>
  )
}

export default More;