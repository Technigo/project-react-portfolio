import React from 'react';
import styled from 'styled-components';

const MoreArrows = () => {
  return <StyledArrows className="more-arrows" aria-hidden="true"> &gt;&gt;</StyledArrows>
}

export default MoreArrows;

const StyledArrows = styled.span`
  color: var(--heading);
  font-weight: 700;
`