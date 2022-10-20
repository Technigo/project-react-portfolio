import React from 'react';
// import styled from 'styled-components';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const Tech = () => {
  return (
    <OuterWrapper className="background">
      <InnerWrapper>
        <h2>Tech</h2>
        <p>HTML, CSS, Flexbox, JavaScript, Web Accessibly,
          API:s, mob-programming, pair-programming, Github
        </p>
      </InnerWrapper>
    </OuterWrapper>
  );
};
export default Tech;

