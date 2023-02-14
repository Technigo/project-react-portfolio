import React from 'react';
import styled from 'styled-components'
import MoreThoughts from './MoreThoughts';

import { SectionTitle, Container } from './Globalstyles'

const Thoughts = () => {
  return (
    <>
      <StyledThoughts>
        <SectionTitle>My Thoughts</SectionTitle>
      </StyledThoughts>
      <MoreThoughts />
    </>
  )
}

export default Thoughts

const StyledThoughts = styled(Container)`
 
`