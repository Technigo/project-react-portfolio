import React, { useState, useEffect } from 'react';
import { BASE_URL } from 'utils/urls';
import { InnerWrapper, /* Devices, */MainHeader, MainSections, MainText } from 'styles/mainStyles';

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState({});

  useEffect(() => {
    setLoading(true)
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        return setList(data)
      })
      .catch((error) => console.error(error))
      .finally(() => {
        console.log('list in fetch', list)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <p>Page is loading...</p>
    )
  }

  return (
    <MainSections coloredBackground>
      <InnerWrapper>
        <MainHeader>FEATURED PROJECTS</MainHeader>
        <MainText>{console.log('list', list)}</MainText>
      </InnerWrapper>
    </MainSections>
  )
}

export default Projects;