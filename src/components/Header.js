import React from 'react'
import { HeaderWrapper, SmallHeading, MediumHeading, BigHeading } from 'StyledComponents/HeaderStyle.js'

export const Header = () => {
  return (
    <HeaderWrapper>
      <SmallHeading>Portfolio</SmallHeading>
      <BigHeading>Jessica Hansson</BigHeading>
      <MediumHeading>Frontend developer</MediumHeading>
    </HeaderWrapper>
  )
}

