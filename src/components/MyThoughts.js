import React from 'react';
// import styled from 'styled-components';
import { OuterWrapper, LargeHeadline, InnerWrapper } from 'styles/GlobalStyles';

const MyThoughts = () => {
  return (
    <OuterWrapper>
      <LargeHeadline>MY THOUGHTS ABOUT CODE</LargeHeadline>
      <InnerWrapper>
        <p>
        Future thoughts about code will be published here.
        </p>
      </InnerWrapper>
    </OuterWrapper>
  )
}
export default MyThoughts;