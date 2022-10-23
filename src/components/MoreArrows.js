import React from 'react';
import styled from 'styled-components/macro';

const MoreArrows = () => {
  return <StyledArrows aria-hidden="true"> &gt;&gt;</StyledArrows>
}

export default MoreArrows;

const StyledArrows = styled.span`
  color: var(--heading);
  font-weight: 700;
`