import React from 'react'
import { MainHeaders, OuterWrapper, IconGroup, InnerWrapper } from './globalStyling'
import { Icons } from './Icons'

export const ForMore = () => {
  return (
    <OuterWrapper selectedColor="#ab83bb">
      <InnerWrapper>
        <MainHeaders>for more</MainHeaders>
        <IconGroup
          justifyContent="space-evenly">
          <Icons
            color="#ffffff"
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
