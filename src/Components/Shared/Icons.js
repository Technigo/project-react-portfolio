import React from 'react';
import styled from 'styled-components/macro';

const Icons = ({ linkinLogotyp, githubLogotype }) => {
  const IconsStyle = styled.img` 
  width: 60px;
  padding: 0 10px;

  .test {
    display: flex;
    flexdirection: row;  
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    width: 60px;
  }

  @media (min-width: 1024px) {
    width: 70px;
  }
  `

  return (<div className="test"><IconsStyle src={githubLogotype} alt="Github Logo" /><IconsStyle src={linkinLogotyp} alt="Linkedin Logo" /></div>
  );
};
export default Icons;