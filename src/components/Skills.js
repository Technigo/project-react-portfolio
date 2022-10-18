import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import SectionHeading from './styled/SectionHeading.styled';
import Paragraph from './styled/Paragraph.styled';

const Tech = () => {
  return (
    <SectionContainer>
      <SectionHeading />
      <Paragraph>
        HTML5, CSS3, JavaScript, ES6, React, JSX, React Hooks, Redux, Styled Components
      </Paragraph>
    </SectionContainer>
  );
};

export default Tech;