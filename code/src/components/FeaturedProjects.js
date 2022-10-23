import React from 'react'

import { ContainerWrapper, FlexWrapper, SectionWrapper, SectionHeadings } from 'GlobalStyles';

import { FeaturedProjectCard } from './FeaturedProjectCard';

export const FeaturedProjects = () => {
  return (
    <SectionWrapper>
      <ContainerWrapper>
        <FlexWrapper>
          <SectionHeadings>featured projects</SectionHeadings>
          <FeaturedProjectCard />
        </FlexWrapper>
      </ContainerWrapper>
    </SectionWrapper>
  )
}
