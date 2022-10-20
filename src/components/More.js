import React from 'react';
// import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './StyledComponents/Wrappers';
import { IconLinks } from './StyledComponents/IconLinks';

export const More = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <h3>More</h3>
        <IconLinks />
        Linked Github Stackoverflow
      </InnerWrapper>
    </BlockSection>
  );
};
