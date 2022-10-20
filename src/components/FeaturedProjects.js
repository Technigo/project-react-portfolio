import React, { useState } from 'react'
// import styled from 'styled-components'

const GithubAPI = 'https://api.github.com/users/marwebdesign/repos'

export const FeaturedProjects = () => {
  const [projects, setProjects] = useState([''])
  fetch(GithubAPI)
    .then((res) => res.json())
    // .then((response) => console.log(response))
    // .then((data) => console.log(data))
    .then((data) => {
      setProjects(data)
    })
  return (
    <div>
      {projects.map((prop) => (
        <div key={prop.id}>
          <p>{prop.name}</p>
          <p>{prop.html_url}</p>
          <p>{prop.description}</p>
        </div>
      ))}

    </div>
  )
}

// const options = {
//   method: 'GET',
//   headers: {
//     Authorization: 'token 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'
//   }
// }
