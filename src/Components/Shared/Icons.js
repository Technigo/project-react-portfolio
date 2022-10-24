import React from 'react';
import styled from 'styled-components/macro';

const Icons = ({ linkinLogotyp, githubLogotype }) => {
  const IconsStyle = styled.img` 
  width: 60px;
  padding: 0 10px;

  .icon-wrapper {
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

  return (<div className="icon-wrapper"><a href="https://github.com/petrasson"><IconsStyle src={githubLogotype} alt="Github Logo" /></a><a href="https://www.linkedin.com/in/petra-eriksson-623b6a163/"><IconsStyle src={linkinLogotyp} alt="Linkedin Logo" /></a></div>
  );
};
export default Icons;

