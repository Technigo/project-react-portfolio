import React from 'react';
import Header from 'components/Header';

// import {OuterWrapper, InnerWrapper} from 'styles/MainStyles';
import Description from 'sections/Description';
import Tech from 'sections/Tech';
import Projects from 'sections/Projects';

export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <Tech />
      <Projects />
    </div>
  )
}
