import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './StyledComponents/Wrappers';

export const Header = () => {
  return (
    <HeaderBackground>
      <BlockSection>
        <InnerWrapper>Header</InnerWrapper>
      </BlockSection>
    </HeaderBackground>
  );
};

const HeaderBackground = styled.div`
  background-image: url(https://images.freeimages.com/images/large-previews/01a/technology-background-1632715.jpg);
`;
