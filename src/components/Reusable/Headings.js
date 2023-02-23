import React from 'react'
import styled from 'styled-components/macro'

export const Headings = ({ heading }) => {
  return (
    <div>
      {heading && <SectionTitle>{heading}</SectionTitle>}
    </div>
  )
}

export const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: white;
  background-color: var(--color-darkGreen);
  text-align: center;
  padding: .4em;
  margin-bottom: 2em;
  text-transform: uppercase;
  border-radius: 3px;
  letter-spacing: .1em;
`