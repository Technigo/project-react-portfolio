import styled from 'styled-components'
import React from 'react'
import './about.css'

const Section = styled.section`
  margin-top: 8rem;

  section > h2, section > h5 {
    text-align: center;
    color: var(--color-light);
  }
`

const About = () => {
  return (
    <Section>
      <h1>About</h1>
    </Section>
  )
}

export default About