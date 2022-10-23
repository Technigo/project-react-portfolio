import React from 'react'
import styled from 'styled-components'
import PageSection from './PageSection'
import Wrapper from './Wrapper'

import { Lollipop } from './ComponentLibrary'

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
          Hi there! I like writing code, it&apos;s really great fun.
          Cat ipsum dolor sit amet, british shorthair persian.
          Malkin himalayan for donskoy scottish fold yet panther siamese.
          Lion turkish angora. Lynx. Turkish angora panther yet birman bobcat cougar
          american bobtail maine coon.
          Tomcat manx.
        </SummaryText>
      </Wrapper>
    </PageSection>
  )
}

export default Summary