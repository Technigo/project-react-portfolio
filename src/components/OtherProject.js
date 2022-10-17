import React from 'react'

const OtherProject = (
  {
    deployedLink,
    projectImage,
    projectTitle,
    projectDescription,
    techPTags,
    repoLink
  }
) => {
  return (
    <div className="project other other-project">
      <a href={deployedLink} className="test">
        <div className="other-image-container">
          <div className="project-image-overlay" />
          <img src={projectImage} className="other-project-img" alt={projectTitle} />
        </div>
        <div className="other-text">
          <h4 className="underline">{projectTitle}</h4>
          <p className="underline">{projectDescription}<span className="more-arrows" aria-hidden="true"> &gt;&gt;</span></p>
          <div className="tag-wrapper">
            {techPTags}
          </div>
        </div>
      </a>
      <a href={repoLink} className="tag-wrapper">
        <p className="repo-tag other-repo-tag">Repo on GitHub</p>
      </a>
    </div>
  )
}

export default OtherProject;