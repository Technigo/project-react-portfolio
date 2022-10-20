import React from 'react'
import { MainHeaders, InnerWrapper, IconGroup } from './globalStyling'
import { Icons } from './Icons'

export const ForMore = () => {
  return (
    <InnerWrapper selectedColor="#3f6f58c2">
      <MainHeaders>for more</MainHeaders>
      <IconGroup
        justifyContent="space-around">
        <Icons
          iconWidth="23px"
          iconMargin="19px"
          boxWidth="60px"
          boxHeight="60px"
          linkWidth="130px"
          linkedin="Linkedin"
          github="Github"
          stackOverflow="Stack Overflow" />
      </IconGroup>
    </InnerWrapper>

  )
}
