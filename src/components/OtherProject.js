import React from 'react';
import styled from 'styled-components';
import data from 'data.json';

const projectShowSmall = data.Projects.ShowSmall;
console.log(projectShowSmall);

const OtherProject = () => {
  return (
    <OtherProjectStyling>
      <section>
        <h3> More projects</h3>
        {projectShowSmall.reverse().map((small) => (
          <a href={small.url} alt="link to project" target="_blank" rel="noopener noreferrer">
            <div className="otherproject-div" key={small.id}>
              <h4 className="project-title">{small.projectName}</h4>
              <p className="project-description">here comes some infor about project</p>
            </div>
          </a>
        ))}
      </section>
    </OtherProjectStyling>
  )
}

export default OtherProject

const OtherProjectStyling = styled.section`

display:flex;
flex-direction: row;
justify-content:center;

.otherproject-div{
  margin:0px;
  padding:0px;
}

p{
  margin:0px;
  padding: 0px;
}

`
