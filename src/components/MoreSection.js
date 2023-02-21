import React from 'react';
import styled from 'styled-components';
import { Section, TextWrapper } from 'components/Section';

import GitHub from '../images/cat1.png'
import LInkedIn from '../images/link1.png'

const MoreSection = () => {
  return (
    <IconSection>
      <IconWrap>
        <IconContainer>
          <a
            href="https://www.linkedin.com/in/ceciliafranlund/"
            target="_blank"
            rel="noreferrer">
            <img
              src={LInkedIn}
              alt="link to Cecilias LinkedIn" />
          </a>
          <a
            href="https://github.com/Sneezan"
            target="_blank"
            rel="noreferrer">
            <img
              src={GitHub}
              alt="link to Sneezan GitHub" />
          </a>
        </IconContainer>
      </IconWrap>
    </IconSection>
  );
};
export default MoreSection;

const IconWrap = styled(TextWrapper)`
display: flex;
`;

const IconSection = styled(Section)`
background-color: var(--mudSlide);
`;

const IconContainer = styled.div`
margin: 0 auto;
img{
    width: 90px;
    padding:10px;
    margin: 20px;
&:hover{
  transition: ease-out .3s;
  scale: 1.1;
}}
`;
