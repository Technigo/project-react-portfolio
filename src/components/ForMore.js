
import React from 'react'

import styled from 'styled-components/macro'
import { Heading } from './ComponentLibrary'
import PageSection from './PageSection'
import Icon from './Icon'

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 130px);
  justify-content: center;
  gap: 30px;
`

const ForMore = () => {
  return (
    <PageSection>
      <Heading>
        For more
      </Heading>
      <IconContainer>
        <Icon variant="linkedin" showText size={90} />
        <Icon variant="github" showText size={90} />
        <Icon variant="stackoverflow" showText size={90} />
      </IconContainer>
    </PageSection>
  )
}

export default ForMore