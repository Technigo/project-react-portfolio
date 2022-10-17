import React from 'react';

const OtherThought = (
  {
    thoughtLink,
    publishDate,
    thoughtTitle
  }
) => {
  return (
    <a className="underline" href={thoughtLink}>
      <p className="date underline">
        {publishDate}. <strong>{thoughtTitle}</strong>
        <span className="more-arrows" aria-hidden="true"> &gt;&gt;</span>
      </p>
    </a>
  )
}

export default OtherThought;