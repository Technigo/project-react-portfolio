import React from 'react'
import { InnerWrapper, OuterWrapper } from 'StyledComponents/GlobalStyles'
import { FeaturedWrapper } from 'StyledComponents/ProjectsStyle'

const FeaturedProjects = () => {
  return (
    <OuterWrapper grey>
      <InnerWrapper>
        <FeaturedWrapper>
          Projects...
        </FeaturedWrapper>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default FeaturedProjects