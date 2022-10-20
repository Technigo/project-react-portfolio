import React from 'react';
import styled from 'styled-components/macro';
import Github from '../../Assets/linkedin_logotype.svg';
import Inkedin from '../../Assets/github_logotype.svg';

const Icons = () => {
  const IconsStyle = styled.img`
  font-size: 2em;
  padding: 10px;
  `;

  return (
    <div>
      <IconsStyle>
        <img src={Github} alt="React Logo" />
        <img src={Inkedin} alt="React Logo" />

      </IconsStyle>
    </div>
  );
};
export default Icons;

/*
<a href="https://www.linkedin.com/in/petra-eriksson-623b6a163/">
<a href="https://github.com/petrasson/">
 <IconsStyle>
 <img className="icon-picture" src={Inkedin} alt="Go to Petras LinkedIn" target="_blank" />
 <img className="icon-picture" src={Github} alt="Go to Petras Github" target="_blank" />
 </IconsStyle>
*/