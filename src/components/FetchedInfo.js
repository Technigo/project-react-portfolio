const APIKey = 'Kneedler'
fetch(`https://api.github.com/users/${APIKey}/repos`)
  .then((res) => res.json())
  .then((data) => console.log(data));

/* const FetchedInfo = () => {
  return (
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => console.log(data))
  )
}

/* import React, { useEffect } from 'react'

const FetchedInfo = () => {
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => (res.json))
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
      .finally(() => console.log('no errors'))
  }, []);

  return (
    <div>Im the Header component</div>
  )
}

export default FetchedInfo; */