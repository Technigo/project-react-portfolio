import React from 'react';
import { Section, SectionHeadline, SectionText, SectionHeadlineBg } from 'StyledComponents/Section';
import { FlexWrapper } from 'StyledComponents/Flex';

const Tech = () => {
  return (
    <FlexWrapper>
      <Section>
        <SectionHeadline><SectionHeadlineBg>TECH</SectionHeadlineBg></SectionHeadline>
        {/* eslint-disable-next-line max-len  */}
        <SectionText center>HTML5, CSS3, JavaScript, React Hooks, Styled components, JSX</SectionText>
      </Section>
    </FlexWrapper>
  )
}

export default Tech;