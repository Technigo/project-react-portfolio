import React from 'react';
import { Section, SectionHeadline, SectionText, SectionHeadlineBg } from 'StyledComponents/Section';
import { FlexWrapper } from 'StyledComponents/Flex';

const Tech = () => {
  return (
    <FlexWrapper>
      <Section>
        <SectionHeadline><SectionHeadlineBg>TECH</SectionHeadlineBg></SectionHeadline>
        <SectionText>HTML, CSS, JavaScript, pair-programming, mob-programming, GitHub</SectionText>
      </Section>
    </FlexWrapper>
  )
}

export default Tech;