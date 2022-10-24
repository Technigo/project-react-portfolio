import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/Me.png';
import { GitHubSvg, StackSvg, LinkedInSvg } from './Icons';

const Header = () => {
  return (
    <StyledHeader>
      <IconsContainer>
        <a
          href="https://www.linkedin.com/"
          title="Link to my LinkedIn Profile"
          target="_blank"
          rel="noreferrer"
          aria-hidden>
          <div>
            <LinkedInSvg />
          </div>
        </a>
        <a
          href="https://github.com/iracuzzi/"
          target="_blank"
          title="Link to my GitHub Profile"
          rel="noreferrer"
          aria-hidden>
          <div>
            <GitHubSvg />
          </div>
        </a>
        <a
          href="https://stackoverflow.com/users/19401006/arnau-monforte"
          target="_blank"
          title="Link to my Stack Overflow Profile"
          rel="noreferrer"
          aria-hidden>
          <div>
            <StackSvg />
          </div>
        </a>
      </IconsContainer>

      <HeadingsContainer>
        <h1>Portfolio: Arnau Monforte Coronas</h1>
        <h2>Frontend and future backend developer</h2>
      </HeadingsContainer>
      <ProfileImage src={profilePic} alt="me" />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: relative;
  background: linear-gradient(
    354deg,
    rgba(253, 240, 224, 1) 20%,
    rgba(230, 203, 168, 1) 50%,
    rgba(0, 8, 193, 1) 80%
  );
  color: white;
  width: 100%;
  height: 400px;
  padding-top: 1px;
  
  @media (max-width: 650px) {
    height: 490px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1.5rem;
  position: absolute;
  top: 2.5rem;
  right: 4.5rem;
`;

const HeadingsContainer = styled.div`
  color: white;
  margin: 7.5rem 0 0 4.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    margin-left: 3rem;
  }
  @media (max-width: 650px) {
    margin: 10rem 0 0 2rem;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  right: 4.5rem;
  bottom: -3rem;
  border: 2px solid white;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  @media (max-width: 1200px) {
    right: 3rem;
  }
  @media (max-width: 650px) {
    width: 150px;
    right: 2rem;
    bottom: -1rem;
  }
`;

