import React from 'react';
import styled from 'styled-components';
import SoMeLinks from 'components/SoMeLinks'

const Header = () => {
  return (
    <StyledHeader>
      <SoMeLinks />
      <StyledImgWrapper>
        <StyledPortrait src="images/linus_profile.jpg" alt="Portrait of Linus" />
      </StyledImgWrapper>
      <StyledWrapper>
        <p>Linus Eriksson</p>
        <h1>Frontend Developer</h1>
        <p className="second-header">+ Visual designer</p>
      </StyledWrapper>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: var(--mobile-y-padding);
  text-align: center;
  background-color: var(--color-pink);

  h1 {
    font-size: 3.313rem;
    line-height: 3.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .second-header {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (min-width: 668px) {
    height: 75vh;
    flex-direction: row-reverse;
    gap: 32px;
  }

  @media (min-width: 1024px) { 
    height: 75vh;
    gap: 32px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 668px) {
    text-align: left;
    width: 22rem;
  }

  @media (min-width: 1024px) { 
    width: 22rem;
  }
`;

const StyledImgWrapper = styled.div`
  @media (min-width: 668px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledPortrait = styled.img`
  width: 12rem; 
  border-radius: 50%;

  @media (min-width: 668px) {
    width: 13.875rem; 
  }
`;