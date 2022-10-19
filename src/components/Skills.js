import React from 'react'
import { ContainerBeige, Subheading } from 'GlobalStyles';
import styled from 'styled-components'

export const Skills = () => {
  return (
    <ContainerBeige>
      <Subheading>Skills</Subheading>
      <StyledSkills>
        <div className="column1">
          <div className="column__headline">Code</div>
          <div className="column__skills">
            HTML5<br />CSS3<br />JavaScript ES6<br />React<br />Styled Components<br />GitHub
          </div>
        </div>

        <div className="column2">
          <div className="column__headline">Toolbox</div>
          <div className="column__skills">
            Adobe Photoshop<br />Adobe Illustrator<br />Adobe InDesign<br />
            Figma<br />Keynote<br />Slack
          </div>
        </div>

        <div className="column3">
          <div className="column__headline">More</div>
          <div className="column__skills">
            Graphic design<br />Branding<br />Packaging design<br />
            Concept development<br />Agile methodology
          </div>
        </div>
      </StyledSkills>
    </ContainerBeige>
  )
};

export const StyledSkills = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 50px auto;
    max-width: 768px;

    .column1, .column2, .column3 {
        flex: 33.33%;
        height: 250px;
        text-align: center;
        min-width: 120px;
    }
 
            .column__headline{
                font-family: 'Roboto', sans-serif;
                font-weight: 700;
                text-transform: uppercase;
                text-align: center;
                font-size: 15px;
                color: #E8415E;
                padding-bottom: 5px;
            }

            .column__skills{
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                text-align: center;
                font-size: 15px;
                line-height: 25px;
            }
`