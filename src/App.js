import React, { useEffect, useState } from 'react';
import GlobalStyles from 'components/styled/Global';
import { OuterWrapper, InnerWrapper } from 'components/styled/Wrappers.styled';
import Header from './components/Header';
import Summary from './components/Summary';
import Tech from './components/Tech';
import FeatProjects from './components/FeatProjects';

import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  const [repos, setRepos] = useState([]);
  console.log(repos)

  useEffect(() => {
    fetch('https://api.github.com/users/karlfredrikholm/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
  }, []);

  return (
    <>
      <GlobalStyles />
      <OuterWrapper>
        <InnerWrapper>
          <Header />
          <Summary />
          <Tech />
          <FeatProjects repos={repos} />
          <Skills />
          <Footer />
        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default App;
