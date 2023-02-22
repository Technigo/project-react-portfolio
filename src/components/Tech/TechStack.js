import React from 'react';

import { Headings } from '../Reusable/Headings';
import { InnerWrapper, OuterWrapper } from '../Styles/Globalstyles'

const TechStack = () => {
  return (
    <OuterWrapper>
      <Headings heading="Tech" />
      <InnerWrapper>
        <p>HTML, CSS, Flexbox, Grid, JavaScript ES6, JSX, React, React Hooks, Redux,
          Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, Github.
        </p>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default TechStack;
