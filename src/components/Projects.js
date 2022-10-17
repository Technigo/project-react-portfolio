
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/AmandaElvkull/repos')
      .then((Response) => Response.json())
      .then((json) => setProjects(json))
      .catch((error) => alert(error, 'error'))
  })
  return (
    <article className="main-container">
      <div className="small-container">
        {projects.map((test) => (
          <div className="test" key={test.id}>
            <a
              href={test.url}
              target="_blank"
              rel="noreferrer">  <img src="" alt="hello" />
            </a>
          </div>
        ))}
        <div className="overlay">
          <p className="overlay-text">
                Heding
          </p>
          <div className="text-container">
            <h4> Heading</h4>
            <p> lorem lorem lorem lorem </p>
            <p> wrapper</p>
          </div>
        </div>
      </div>
    </article>
  )
}
export default Projects