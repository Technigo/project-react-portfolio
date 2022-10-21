import React from 'react'
import { CardDiv, CardholderDiv, CardImage, CardTextDiv } from './styled/Cards'
import { InlineHeading, SectionHeading, SubsectionHeading } from './styled/Headings'
import { InnerWrapper, OuterWrapper } from './styled/Wrappers'

export const Thoughts = () => {
  return (
    <OuterWrapper id="my-thoughts">
      <InnerWrapper>
        <SectionHeading>THOUGHTS ON CODE</SectionHeading>
        <CardholderDiv>
          <CardDiv>
            <div>
              <CardImage src="images/background-image.jpg" alt="apple logo" />
            </div>
            <CardTextDiv>
              <h4>Article title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea quidem!
              </p>
            </CardTextDiv>
          </CardDiv>
          <CardDiv>
            <div>
              <CardImage src="images/background-image.jpg" alt="apple logo" />
            </div>
            <CardTextDiv>
              <h4>Article title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea quidem!
              </p>
            </CardTextDiv>
          </CardDiv>
        </CardholderDiv>
        <SubsectionHeading>MORE THOUGHTS</SubsectionHeading>
        <div className="other-project">
          <p><InlineHeading>DATE</InlineHeading> Article title.</p>
        </div>
        <div className="other-project">
          <p><InlineHeading>DATE</InlineHeading> Article title.</p>
        </div>
      </InnerWrapper>
    </OuterWrapper>
  )
}