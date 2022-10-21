import React from 'react';
import styled from 'styled-components/macro';
import Github from '../../Assets/Logotype_linkedin_black.svg';
import Inkedin from '../../Assets/Logotype_github_white.svg';

const Icons = () => {
  const IconsStyle = styled.img` 
  width: 55px;
  


  @media (min-width: 667px) and (max-width: 1024px) {
    width: 6 0px;
  }

  @media (min-width: 1024px) {
    width: 70px;
  }
  `

  return (<><IconsStyle src={Github} alt="Github Logo" /><IconsStyle src={Inkedin} alt="LinkedIn Logo" />
  </>
  );
};
export default Icons;