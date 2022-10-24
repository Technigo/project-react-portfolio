import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, LinkNoLine } from './GlobalStyleComponents';

/* Component that shows my contact information at the bottom of the page */

const Contact = () => {
  return (
    <ClonedOuterWrapper>
      <ClonedInnerWrapper>

        <ForMoreBox>
          <ForMoreTitle>CONTACT</ForMoreTitle>
          <ForMoreSubTitle>Viktor Svensson</ForMoreSubTitle>
          <ForMoreSubTitle>+46 0737208154</ForMoreSubTitle>
          <LinkNoLine href="viktor.tommy.svensson@gmail.com" target="_blank" rel="noreferrer">
            <ForMoreSubTitle>viktor.tommy.svensson@gmail.com</ForMoreSubTitle>
          </LinkNoLine>
        </ForMoreBox>

      </ClonedInnerWrapper>
    </ClonedOuterWrapper>
  );
};

/* localy stored styled components */

const ClonedOuterWrapper = styled(OuterWrapper)`
    background-color: #f0a04b;
`;

const ForMoreBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
        width: 40%;
    }
`;
const ForMoreTitle = styled.h2`
    color: white;
    font-size: 26px;
    line-height: 1.4;
  
    @media (max-width: 800px) {
      font-size: 18px;
      line-height: 1.4;
`;

const ForMoreSubTitle = styled.h3`
    color: white;
    font-size: 26px;
    line-height: 1.4;
  
    @media (max-width: 800px) {
      font-size: 18px;
      line-height: 1.4;
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

export default Contact;
