import React from 'react';

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
      <article className="big-thought project">
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
      </article>
    </a>
  )
}

export default BigThought;