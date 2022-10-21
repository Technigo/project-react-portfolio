import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, TextWrapper } from 'components/Section';

import GitHub from '../images/NeonCat.png'
import LInkedIn from '../images/NeonLink.png'

const MoreSection = () => {
  return (
    <IconSection>
      <SectionTitle>FOR MORE</SectionTitle>
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
display:flex;
`;

const IconSection = styled(Section)`
background-color: #2B5A71;
`;

const IconContainer = styled.div`
margin: 0 auto;

img{
    width: 90px;
    padding:10px;
    margin: 20px;
}
`;
