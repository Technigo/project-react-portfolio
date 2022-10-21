import React from 'react'
import { MainHeaders, OuterWrapper, IconGroup, InnerWrapper } from './globalStyling'
import { Icons } from './Icons'

export const ForMore = () => {
  return (
    <OuterWrapper selectedColor="#a0bcb8">
      <InnerWrapper>
        <MainHeaders>for more</MainHeaders>
        <IconGroup
          justifyContent="space-evenly">
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
    </OuterWrapper>

  )
}
