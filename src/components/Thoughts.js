import React from 'react';
import styled from 'styled-components'
import MoreThoughts from './MoreThoughts';

import { OuterWrapper } from './Styles/Globalstyles'
import { Headings } from './Reusable/Headings';

const Thoughts = () => {
  return (
    <>
      <StyledThoughts>
        <Headings heading="My Thoughts" />
      </StyledThoughts>
      <MoreThoughts />
    </>
  )
}

export default Thoughts

const StyledThoughts = styled(OuterWrapper)`
 
`