import React from 'react'
import styled from 'styled-components/macro'
import PageSection from './PageSection'
import { Lollipop, Wrapper } from './ComponentLibrary'

const SummaryText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    line-height: 1.6;
`

const Summary = () => {
  return (
    <PageSection backgroundColor="var(--sectionbg)">
      <Wrapper>
        <SummaryText>
          <Lollipop />
          Hi there! I&apos;m Amanda and I like building neat looking things for the web.
          Based in Stockholm, Sweden.
        </SummaryText>
      </Wrapper>
    </PageSection>
  )
}

export default Summary