
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components/macro'
import { Heading } from './ComponentLibrary'
import PageSection from './PageSection'
import SocialIcon from './SocialIcon'

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 130px);
  justify-content: center;
  gap: 30px;

  @media (max-width: 669px) {
    grid-template-columns: repeat(3, 90px);
    gap: 10px;
  }
`

const ForMore = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 669px)' })

  const iconSize = isMobile ? 50 : 90

  return (
    <PageSection backgroundColor="var(--sectionbg)">
      <Heading>
        For more
      </Heading>
      <IconContainer>
        <SocialIcon variant="linkedin" showText size={iconSize} />
        <SocialIcon variant="github" showText size={iconSize} />
        {/* <Icon variant="stackoverflow" showText size={iconSize} /> */}
      </IconContainer>
    </PageSection>
  )
}

export default ForMore