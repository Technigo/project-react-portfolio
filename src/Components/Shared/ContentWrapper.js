import React from 'react';
import styled from 'styled-components';

const ContentWrapper = (props) => { /* Reactcomponent returnerar en stylecomponent */
  const OuterWrapper = styled.div`
  background-color: ${props.backgroundColor};
  `
  const InnerWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
  return (
    <OuterWrapper as={props.as}> {/* Writes what type of element it is as a props */}
      <InnerWrapper>
        {props.children}  {/* everhthing that is within the component, eg footer. */}
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default ContentWrapper;
