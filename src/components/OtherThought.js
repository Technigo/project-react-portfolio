import React from 'react';
import styled from 'styled-components';
import MoreArrows from './MoreArrows';

const OtherThought = (
  {
    thoughtLink,
    publishDate,
    thoughtTitle
  }
) => {
  return (
    <StyledOtherThoughtLink className="underline" href={thoughtLink}>
      <p className="date underline">
        {publishDate}. <strong>{thoughtTitle}</strong>
        <MoreArrows />
      </p>
    </StyledOtherThoughtLink>
  )
}

export default OtherThought;

const StyledOtherThoughtLink = styled.a`
text-decoration: underline;
  width: 100%;
  color: var(--heading);
  font-size: 16px;
  margin-right: 4px;
`