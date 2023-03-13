import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components/macro'
import { ContactCard, Heading } from './ComponentLibrary'
import PageSection from './PageSection'
import SocialIcon from './SocialIcon'

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 130px);
  justify-content: center;
  gap: 30px;

  @media (max-width: 669px) {
    grid-template-columns: repeat(2, 90px);
    gap: 10px;
  }
`

const ContactText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  color: var(--black);
  line-height: 1.6;
  padding-bottom: 50px;
`

const LetsTalk = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 669px)' })

  const iconSize = isMobile ? 50 : 40

  return (
    <PageSection backgroundColor="var(--accent)">
      <ContactText>
        <Heading>Let&apos;s talk!</Heading>
        <ContactCard />

      </ContactText>
      <IconContainer>
        <SocialIcon variant="linkedin" showText size={iconSize} />
        <SocialIcon variant="github" showText size={iconSize} />
      </IconContainer>
    </PageSection>
  )
}

export default LetsTalk