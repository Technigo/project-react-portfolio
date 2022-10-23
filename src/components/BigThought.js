import React from 'react';
import styled from 'styled-components/macro';
import StyledProject, { ImageContainerWithOverlay } from './Project.style';
import MoreArrows from './MoreArrows';
import { Date, OverlayText } from './ReusableStyles.style';

const BigThought = (
  {
    thoughtLink,
    thoughtImage,
    publishDate,
    thoughtTitle,
    overlayText,
    thoughtDescription
  }
) => {
  return (
    <a href={thoughtLink}>
      <StyledBigThoughtWrapper>
        <ImageContainerWithOverlay>
          <div className="overlay" />
          <img src={thoughtImage} alt={thoughtTitle} />
          <OverlayText aria-hidden="true">{overlayText}</OverlayText>
        </ImageContainerWithOverlay>
        <Date>{publishDate}.</Date>
        <h3>{thoughtTitle}.</h3>
        <p className="thought-description">
          {thoughtDescription} <MoreArrows />
        </p>
      </StyledBigThoughtWrapper>
    </a>
  )
}

export default BigThought;

const StyledBigThoughtWrapper = styled(StyledProject)`
  .thought-description {
  font-weight: 300;
  }
`