import React from 'react';
import styled from 'styled-components/macro';

const ContentWrapper = (props) => {
  const { backgroundColor, position, children } = props;

  const OuterWrapper = styled.div`
    background-color: ${backgroundColor};
    padding: 20px 0 0 0;
  `;
  const InnerWrapper = styled.div`
    position: ${position};
    max-width: 940px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 667px) and (max-width: 1024px) {
      width: 75%;
    }

    @media (min-width: 1025px) {
      width: 75%;
    }
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
};

export default ContentWrapper;
