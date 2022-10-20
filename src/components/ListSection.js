import React from 'react';

import { StyledListSection } from './ReusableStyles.style'

const ListSection = ({ heading, ListItems }) => {
  const skillList = ListItems.map((item) => <li key={item}>{item}</li>)
  return (
    <StyledListSection className="list-section list-section1">
      <h3>{heading}</h3>
      <ul className="skill-group code">
        {skillList}
      </ul>
    </StyledListSection>
  )
}

export default ListSection;

