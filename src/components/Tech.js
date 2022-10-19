import styled from 'styled-components'
import React from 'react-dom'
import Global from './Global';

const Tech = () => {
  return (
    <StyledTech>
      <div className="tech-section">
        <Global>Tech</Global>
        <div className="tech-container">
          <p> HTML, CSS, Flexbox, JavaScript ES6,
            JSX, React, React Hooks, Redux, Node.js, Mongo DB, Web
            Accessibility, API:s, mob-programming, pair-programming, Github.
          </p>
        </div>
      </div>
    </StyledTech>
  );
}

const StyledTech = styled.div`
.tech-section {
    width: 100%;
    height: 300px;
    padding-top: 35px;
    text-align: center;
    background-color:#FFF6EA;
}

.tech-container {
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
}
`

export default Tech;