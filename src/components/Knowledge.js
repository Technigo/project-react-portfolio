import React from 'react';
import { InnerWrapper, /* Devices, */MainHeader, MainSections, MainText } from 'styles/mainStyles';

const Knowledge = () => {
  return (
    <MainSections>
      <InnerWrapper>
        <MainHeader>TECH</MainHeader>
        <MainText>
        HTML, CSS, Flexbox, JavaScript, ES6, JSX. React, React Hooks, Redux, Node.js,
         Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, Github.
        </MainText>
      </InnerWrapper>
    </MainSections>
  )
}

export default Knowledge;