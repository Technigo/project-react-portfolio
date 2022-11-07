import React, { useMemo } from 'react'
import { MainHeaders, OuterWrapper, IconGroup, InnerWrapper } from './globalStyling'
import { Icons } from './Icons'

export const ForMore = () => {
  const IconColor = useMemo(() => ({ color: '#152d24', size: '2rem', className: 'react-icons' }), []);

  return (
    <OuterWrapper selectedColor="#a0bcb8">
      <InnerWrapper>
        <MainHeaders>for more</MainHeaders>
        <IconGroup
          justifyContent="space-evenly">
          <Icons
            color="#152d24"
            IconColor={IconColor}
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
