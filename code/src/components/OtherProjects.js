import React from 'react'

import { ContainerWrapper, FlexWrapper, SectionWrapper, SectionHeadings } from 'GlobalStyles';

import { OtherProjectCard } from './OtherProjectCard';

// react component

export const OtherProjects = () => {
  return (
    <SectionWrapper>
      <ContainerWrapper>
        <FlexWrapper>
          <SectionHeadings>other projects</SectionHeadings>
          <OtherProjectCard />
        </FlexWrapper>
      </ContainerWrapper>
    </SectionWrapper>
  )
}

