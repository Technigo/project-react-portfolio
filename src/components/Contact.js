import React from 'react'
import styled from 'styled-components'
import { Subheading } from './ComponentLibrary'
import PageSection from './PageSection'

const FooterText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1.1rem;
    text-align: center;
    color: var(--white);
    line-height: 1.6;
    `

const ContactLink = styled.a`
font-family: "Montserrat", sans-serif;
font-weight: 400;
font-size: 1.1rem;
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
        <p>
          <ContactLink href="tel:0046790421910">
          +46(0)790 42 19 10
          </ContactLink>
        </p>
        <p>
          <ContactLink href="mailto:amanda@amandas.dev">
          amanda@amandas.dev
          </ContactLink>
        </p>
      </FooterText>
    </PageSection>
  )
}

export default Contact