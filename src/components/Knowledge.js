import React from 'react';
import { InnerWrapper, MainHeader, MainSections, MainText } from 'styles/mainStyles';

// The "Tech"-section of the site
const Knowledge = () => {
  return (
    <MainSections>
      <InnerWrapper>
        <MainHeader><mark>TECH</mark></MainHeader>
        <MainText>
        HTML, CSS, Flexbox, JavaScript, JSX, React, React Hooks, Redux,
        </MainText>
        <MainText>
         Node.js, Mongo DB, Web Accessibility,
        </MainText>
        <MainText>
         REST API:s, mob-programming, pair-programming, Github.
        </MainText>
      </InnerWrapper>
    </MainSections>
  )
}

export default Knowledge;