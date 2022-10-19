import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const options = {
  method: 'GET',
  headers: {
    Authorization: 'token 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'
  }
}

export const FeaturedProjects = () => {
  const [projects, setProjects] = useState([''])
  fetch('https://api.github.com/users/marwebdesign/repos', options)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((data) => setProjects(data.repos))

  return (
    <div>  {
      projects.map((prop) => (
        <p>{prop.full_name}</p>
      ))
    }
    </div>
  )
}

