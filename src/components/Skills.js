import React from 'react';
import styled from 'styled-components';

export const Skills = () => {
  return (
    <>
      <StyledSkills>
        <div className="code">
          <ul>
            <li>HTML</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="toolbox">
          <ul>
            <li>Atom*</li>
            <li>Postman</li>
            <li>GIMP</li>
            <li>Canva</li>
            <li>Figma</li>
            <li>Keynote*</li>
            <li>Slack</li>
          </ul>

        </div>
        <div className="More">
          <ul>
            <li>Agile Methodology</li>
            <li>Design Lead</li>
            <li>Strategy*</li>
            <li>Process design*</li>
          </ul>

        </div>
      </StyledSkills>
      <div className="notes">
        <p>* skills will be acquire until the end of education</p>

      </div>
    </>

  )
}

const StyledSkills = styled.li`
padding: 20px;
display:inline-flex;

.notes {
    margin:20px;
}

@media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: center;
    grid-row-gap: 0px;

ul {
    display: flex;
    flex-direction: column;
}

}


`