import React from 'react';
import styled from 'styled-components';

export const Introduction = () => {
  return (
    <IntroductionSection>
      <span className="line" /><span className="dot" />
        Soon to be frontend-developer
    </IntroductionSection>
  )
}

const IntroductionSection = styled.section`
    width: 100%;
    padding: 25px;

    .line {
        border: 1px solid #BA4581;
        width: 40px;
        display: inline-block;
        margin-bottom: 4px;
        background-color: #BA4581;
    }

    .dot {
        height: 10px;
        width: 10px;
        background-color: #BA4581;
        border-radius: 50%;
        display: inline-block;
    }
`