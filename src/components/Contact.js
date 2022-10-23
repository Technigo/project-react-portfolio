import React from 'react'
import styled from 'styled-components'
import { Subheading } from './ComponentLibrary'
import PageSection from './PageSection'

const FooterText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: var(--white);
    line-height: 1.6;
    `

const EmailLink = styled.a`
font-family: "Montserrat", sans-serif;
font-weight: 400;
font-size: 18px;
text-align: center;
color: var(--white);
line-height: 1.6;

&:hover,
&:focus{
    color: var(--white);
};
&:active{
    color: var(--white);
};
`

const Contact = () => {
  return (
    <PageSection backgroundColor="var(--accent)">
      <FooterText>
        <Subheading>Contact</Subheading>
        <EmailLink href="mailto:amanda@amandas.dev">amanda@amandas.dev</EmailLink>
      </FooterText>
    </PageSection>
  )
}

export default Contact