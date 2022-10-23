import React from 'react';

import { StyledListSection } from './ReusableStyles.style'

const ListSection = ({ heading, ListItems }) => {
  const skillList = ListItems.map((item) => <li key={item}>{item}</li>)
  return (
    <StyledListSection>
      <h3>{heading}</h3>
      <ul>
        {skillList}
      </ul>
    </StyledListSection>
  )
}

export default ListSection;

