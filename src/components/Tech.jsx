import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import Paragraph from './styled/Paragraph.styled';

const Tech = () => {
  return (
    <SectionContainer less>
      <h4>Tech</h4>
      <Paragraph main center>
        React, JavaScript ES6, CSS3, HTML5, Redux, Styled Components,
        GitHub, Web Accessibility, Mob Programming
      </Paragraph>
    </SectionContainer>
  );
};

export default Tech;