import React from 'react';
import { SectionContainer } from './styled/Containers.styled';
import Paragraph from './styled/Paragraph.styled';

const Tech = () => {
  return (
    <SectionContainer less>
      <h4>Tech</h4>
      <Paragraph main center>
        HTML5, CSS, JavaScript ES6, React.js, Styled Components, Redux,
        GitHub, Web Accessibility, Mob Programming, Node.js, MongoDB
      </Paragraph>
    </SectionContainer>
  );
};

export default Tech;