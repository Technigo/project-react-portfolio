import React, { useEffect, useState } from 'react';
import GlobalStyles from 'components/styled/Global';
import { OuterWrapper, InnerWrapper } from 'components/styled/Wrappers.styled';
import { BASE_URL } from 'components/utils/api';
import Header from './components/Header';
import Summary from './components/Summary';
// import Tech from './components/Tech';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';
// import Thoughts from './components/Thoughts';
import Skills from './components/Skills';
// import ForMore from './components/ForMore';
import Footer from './components/Footer';

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <>
      <GlobalStyles />
      <OuterWrapper>
        <InnerWrapper>
          <Header />
          <Summary />
          {/* <Tech /> */}
          <FeaturedProjects />
          <OtherProjects repos={repos} />
          {/* <Thoughts /> */}
          <Skills />
          {/* <ForMore /> */}
          <Footer />
        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default App;
