import styled from 'styled-components'
import React from 'react-dom'
import Global from './Global';

const Tech = () => {
  return (
    <StyledTech>
      <div className="tech-section">
        <Global>Tech</Global>
        <div className="tech-container">
          <TechText>
            <span className="highlight">HTML</span>,
            <span className="highlight">CSS</span>,
            <span className="highlight">Flexbox</span>,
            <span className="highlight">Grids</span>,
            <span className="highlight">JavaScript ES6</span>, Wordpress, Hybris CMS, Wix website creator, JSX,
            <span className="highlight">React</span>, React Hooks, Redux, Vue,
            Node.js, Mongo DB, PHP, SQL, Webb accessibility, API:S,
            mob-programming, pair-programming, Github,
            <span className="highlight">Adobe Creative Suite</span>.
          </TechText>
        </div>
      </div>
    </StyledTech>
  );
}

const StyledTech = styled.div`
.tech-section {
  display: flex;
  flex-direction: column;
  border: 2px solid lime;
  width: 100%;
  height: 350px;
  text-align: center;
  background-color:#FFF6EA;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.tech-container {
  border: 2px solid purple;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 300px;
}
`

const TechText = styled.p`
width: 80%;
font-style: 400;
line-height: 29px;
margin: 0;
word-wrap: break-word;
text-align: center;

.highlight {
  color: #d54887;
}
`

export default Tech;