import React from 'react';
import { Section, SectionTitle, TextWrapper } from 'components/Section';
import styled from 'styled-components'

import GitHub from '../images/img_326384.png'

const MoreSection = () => {
  return (
    <Section primary>
      <SectionTitle>FOR MORE</SectionTitle>
      <IconWrap>
        <IconContainer>
          <a
            href="https://github.com/Sneezan"
            target="_blank"
            rel="noreferrer">
            <img
              src={GitHub}
              alt="link to Sneezan GitHub" />
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
    </Section>
  );
};
export default MoreSection;

const IconWrap = styled(TextWrapper)`
display:flex;
`

const IconContainer = styled.div`
border: red solid 3px;
margin: 0 auto;

img{
    width: 90px;
    padding:10px;
    margin: 20px;
}
`