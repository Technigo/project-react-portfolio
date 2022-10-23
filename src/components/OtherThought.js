import React from 'react';
// import styled from 'styled-components/macro';
import MoreArrows from './MoreArrows';
import { Date, StyledOtherLinkWrapper } from './ReusableStyles.style';

const OtherThought = (
  {
    thoughtLink,
    publishDate,
    thoughtTitle
  }
) => {
  return (
    <StyledOtherLinkWrapper href={thoughtLink}>
      <Date>
        {publishDate}. <strong>{thoughtTitle}.</strong>
        <MoreArrows />
      </Date>
    </StyledOtherLinkWrapper>
  )
}

export default OtherThought;
