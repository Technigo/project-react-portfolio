import React from 'react';
import styled from 'styled-components';

export const Contact = () => {
  return (
    <ContactOuterWrapper>
      <ContactInnerWrapper>
        <h5>CONTACT</h5>
        <p>Maria Wellander</p>
        <p>maria.wellander@gmail.com</p>
      </ContactInnerWrapper>
    </ContactOuterWrapper>
  )
}

export const ContactOuterWrapper = styled.div`
  background-color: rgb(162,208,59,0.7);
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