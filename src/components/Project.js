import React from 'react';

const Project = ({ title, featured }) => {
  return (
    <article>
      {featured && (
        <div style={{ height: 200, background: 'pink', color: 'white' }}>
            Fake img
        </div>
      )}
      <h3>{title}</h3>

    </article>
  )
}
export default Project