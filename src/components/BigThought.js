import React from 'react';
import styled from 'styled-components';
import StyledProject from './Project.style';

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
      <StyledBigThoughtWrapper className="project">
        <div className="project-image">
          <div className="project-image-overlay" />
          <img src={thoughtImage} className="image-of-project" alt={thoughtTitle} />
          <p className="overlay-text" aria-hidden="true">{overlayText}</p>
        </div>
        <p className="date">{publishDate}</p>
        <h3>{thoughtTitle}.</h3>
        <p className="thought-description">
          {thoughtDescription} <span className="more-arrows" aria-hidden="true"> &gt;&gt;</span>
        </p>
      </StyledBigThoughtWrapper>
    </a>
  )
}

export default BigThought;

const StyledBigThoughtWrapper = styled(StyledProject)`

`