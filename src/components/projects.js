import React, { useState, useEffect } from 'react'
import { API_TOKEN } from 'secret'

export const Projects = () => {
  const [projectsList, setProjectsList] = useState([])

  const FetchProjects = () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: { API_TOKEN }
      }
    }

    fetch('https://api.github.com/users/linneaajger/repos', options) // options object is passed as 2nd argument to fetch() function.
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