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
  font-size: 1.5rem;
  color: #fff;
  background-color: var(--color-darkGreen);
  display: table;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
  border-radius: 3px;
  
`