import React from 'react';
import styled from 'styled-components'

import { SectionSubTitle, Container } from './StyleComp'

const OtherProjects = () => {
  return (
    <StyledOtherProjects>
      <SectionSubTitle>Other Projects</SectionSubTitle>
    </StyledOtherProjects>
  )
}

export default OtherProjects

const StyledOtherProjects = styled(Container)`
  background-color: var(--color-grey);

`
