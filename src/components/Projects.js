import React, { useState, useEffect } from 'react'

const Projects = () => {
  const [repos, setRepos] = useState([])
  const API_GITHUB = 'https://api.github.com/users/Sailornina/repos'

  useEffect(() => {
    fetch(API_GITHUB)
      .then((res) => res.json())
      .then((json) => {
        setRepos(json)
      })
  }, [])

  console.log(repos)
  return (
    <section>Hi!</section>
  )
}

export default Projects;