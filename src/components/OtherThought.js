import React from 'react';
import styled from 'styled-components';
import MoreArrows from './MoreArrows';
import { Date } from './ReusableStyles.style';

const OtherThought = (
  {
    thoughtLink,
    publishDate,
    thoughtTitle
  }
) => {
  return (
    <StyledOtherThoughtLink className="underline" href={thoughtLink}>
      <Date className="date underline">
        {publishDate}. <strong>{thoughtTitle}</strong>
        <MoreArrows />
      </Date>
    </StyledOtherThoughtLink>
  )
}

export default OtherThought;

const StyledOtherThoughtLink = styled.a`
  p {
    color: var(--heading);
    font-size: 16px;
    margin-right: 4px;
    text-decoration: underline;
  }
`