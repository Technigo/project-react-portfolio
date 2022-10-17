import React, { useState, useEffect } from 'react'

export const Projects = () => {
  const [projectsList, setProjectsList] = useState([])

  const FetchProjects = () => {
    fetch('https://api.github.com/users/linneaajger/repos')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProjectsList(data)
      })
  }
  useEffect(() => {
    FetchProjects()
  }, [])

  return (
    <section>
      {projectsList.map((item) => (
        <div>
          <p>{item.name}</p>
        </div>
      ))}
    </section>
  )
}

// <img src={`https://raw.githubusercontent.com/linneaajger/${item.name}/main/code/images/jack.svg`} alt="project" />
