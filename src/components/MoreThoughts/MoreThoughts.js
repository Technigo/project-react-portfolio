/* eslint-disable linebreak-style */
import React from 'react'
import { SectionContainer, SectionHeadings } from 'Globalstyles';
import { StyledMoreThoughts } from './MoreThoughts.styles';

const MoreThoughts = () => {
  return (
    <SectionContainer bgColor="#eeeeee">
      <SectionHeadings>MORE THOUGHTS</SectionHeadings>
      <StyledMoreThoughts>
        <a href="https://medium.com/codesphere-cloud/10-algorithms-every-developer-should-learn-628faf0f9234" role="button" aria-pressed="false" aria-label="my thoughts" target="_blank" rel="noreferrer">
          <p><span style={{ fontWeight: 700 }}>SEPT 2021.</span>
          10 Algorithms Every Developer Should Learn <span style={{ color: '#829460' }}>&#x276F;&#x276F;</span>
          </p>
        </a>
      </StyledMoreThoughts>
    </SectionContainer>
  )
}

export default MoreThoughts;