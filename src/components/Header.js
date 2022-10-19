import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <img src="images/linus_profile.jpg" alt="Portrait of Linus" />
      <StyledWrapper>
        <p>Linus Eriksson</p>
        <h1>Fullstack Developer</h1>
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

    img {
      width: 11.5rem; 
      border-radius: 50%;
    }

    h1 {
      font-size: 3.313rem;
      line-height: 3.5rem;
      font-weight: 800;
      text-transform: uppercase;
    }

    .second-header {
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.5rem;
    }
  `;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `;