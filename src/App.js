import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Myself from './components/Myself';
import Tech from './components/Tech';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills'
import Socials from './components/Socials';

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/iracuzzi/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <>
      <Header />
      <Myself />
      <Tech />
      <ProjectList repos={repos} />
      <Skills />
      <Socials />
    </>
  )
};
export default App;
