import React from 'react';
import styled from 'styled-components/macro';

const ContentWrapper = (props) => { /* Reactcomponent returnerar en stylecomponent */
  const OuterWrapper = styled.div`
  background-color: ${props.backgroundColor};
  padding: 20px 0 0 0;
  `
  const InnerWrapper = styled.div`
  position: ${props.position};
  max-width: 900px;
  width: 70%;
  margin: 0 auto;
  border: solid 3px black;
  display: flex;
  flex-direction: column;
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
