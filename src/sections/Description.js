import React from 'react';
import styled from 'styled-components';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const Projects = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <StyledParagraph>My name is Linus, I&apos;m a fullstack javascript developer and
            based in Stockholm, Sweden. I&apos;m always looking for exciting opportunities to
            improve my craft and work together with amazing people. That&apos;s where you come in!
        </StyledParagraph>
      </InnerWrapper>
    </OuterWrapper>
  );
};
export default Projects;

const StyledParagraph = styled.p`
  text-align: center;

  @media (min-width: 668px) {
      text-align: left;
    }
`;