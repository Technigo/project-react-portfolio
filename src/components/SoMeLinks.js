import React from 'react';
import styled from 'styled-components';

const SoMeLinks = () => {
  return (
    <StyledWrapper>
      <StyledA
        href="https://github.com/erilinus"
        target="_blank"
        rel="noreferrer">
        <StyledImg
          src="images/github.svg"
          alt="link to Erilinus GitHub" />
      </StyledA>
      <StyledA
        href="https://www.linkedin.com/in/linusje/"
        target="_blank"
        rel="noreferrer">
        <StyledImg
          src="images/linkedin.svg"
          alt="link to Linus Linkedin" />
      </StyledA>
      <StyledA
        href="https://stackoverflowteams.com/c/technigo/users/364/?tab=profile"
        target="_blank"
        rel="noreferrer">
        <StyledImg
          src="images/stackoverflow.svg"
          alt="link to Linus Stackoverflow" />
      </StyledA>
    </StyledWrapper>
  );
};
export default SoMeLinks;

const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  top: 16px;
  right: 16px;
  @media (min-width: 668px) {
    gap: 24px;
    top: 24px;
    right: 24px;
  }
`

const StyledA = styled.a`
`;

const StyledImg = styled.img`
  display: inline-block;
  width: auto;
  height: 3rem;
`