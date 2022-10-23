import React from 'react';
import styled from 'styled-components/macro';
import GithubLogo from '../../Assets/Logo_github_white.svg';
import InkedinLogo from '../../Assets/Logo_linkedin_white.svg';

const Icons = () => {
  const IconsStyle = styled.img` 
  width: 30px;

  
  p {
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

  return (<><p><IconsStyle src={GithubLogo} alt="Github Logo" /></p><p><IconsStyle src={InkedinLogo} alt="LinkedIn Logo" /></p></>
  );
};
export default Icons;