import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';

const MainStructure = () => {
  const [gitData, setGitData] = useState([]);

  const fetchData = () => {
    fetch('https://api.github.com/users/petrasson/repos')
      .then((res) => res.json())
      .then((data) => setGitData(data))
      .catch((error) => console.error('error', error))
      .finally(() => console.log('data', gitData))
  }
  useEffect(() => { fetchData() }, []);

  return (
    <div>
      <Header />
      <Projects />
      <Footer />
    </div>
  );
};
export default MainStructure;