import React from 'react'
import { SectionTitle, SectionSubTitle } from '../Styles/Globalstyles'

export const Headings = ({ subheading, heading }) => {
  return (
    <div>
      {heading && <SectionTitle>{heading}</SectionTitle>}
      {subheading && <SectionSubTitle>{subheading}</SectionSubTitle>}
    </div>
  )
}
