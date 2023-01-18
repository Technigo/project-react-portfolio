import React from 'react';
import styled from 'styled-components';

export const TechInfo = () => {
  return (
    <StyledTechInfo>
      <h3>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux, React Native
        Node.js, MongoDB, Web Accessibility, API:s, mob-programming, pair-programming, Github, Git, Android Emulator, Expo
      </h3>
    </StyledTechInfo>

  )
}

const StyledTechInfo = styled.div`
margin:20px;

h3 {
text-align: center;
padding: 20px;
}
`

