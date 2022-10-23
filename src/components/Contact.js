import React from 'react';
import styled from 'styled-components';

export const Contact = () => {
  return (
    <ContactOuterWrapper>
      <ContactInnerWrapper>
        <h5>CONTACT</h5>
        <p>Lisa Johansson</p>
        <p>lisajoh@icloud.com</p>
      </ContactInnerWrapper>
    </ContactOuterWrapper>
  )
}

export const ContactOuterWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ContactInnerWrapper = styled.div`
  width: 80vw;
  max-width: 900px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 25px;

  p {
    margin: 0;
  }

  @media (min-width: 668px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
