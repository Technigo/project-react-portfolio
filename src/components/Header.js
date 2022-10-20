import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './StyledComponents/Wrappers';
// import backgroundImg from './src/pic/forest.jpeg';

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
  // background-image: url ();
`;
