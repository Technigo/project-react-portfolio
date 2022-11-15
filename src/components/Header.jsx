import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/profile_pic.jpeg';
import { GitHubSvg, StackSvg, LinkedInSvg } from './Icons';

const Header = () => {
  return (
    <StyledHeader>
      <IconsContainer>
        <a
          href="https://www.linkedin.com/in/fredrik-holm-10406b106/"
          title="Link to LinkedIn Profile"
          target="_blank"
          rel="noreferrer"
          aria-hidden>
          <div>
            <LinkedInSvg />
          </div>
        </a>
        <a
          href="https://github.com/karlfredrikholm/"
          target="_blank"
          title="Link to GitHub Profile"
          rel="noreferrer"
          aria-hidden>
          <div>
            <GitHubSvg />
          </div>
        </a>
        <a
          href="https://stackoverflow.com/users/19384002/fredrik-holm"
          target="_blank"
          title="Link to Stack Overflow Profile"
          rel="noreferrer"
          aria-hidden>
          <div>
            <StackSvg />
          </div>
        </a>
      </IconsContainer>

      <HeadingsContainer>
        <h1>Portfolio: Fredrik Holm</h1>
        <h2>Frontend developer</h2>
        <h3>with organizational skills</h3>
      </HeadingsContainer>

      <ProfileImage src={profilePic} alt="me" />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: relative;
  background: var(--main-color);
  background: linear-gradient(
    354deg,
    rgba(128, 136, 255, 1) 0%,
    rgba(255, 132, 24, 1) 100%
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

   & div {
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    padding: .65rem .75rem;
    transition: all .3s ease;
   }

   @media (min-width: 850px) {
    & div:hover {
    transform: scale(1.1);
    };

   & div:hover svg {
    transform: scale(1.2);
    };
   }
  
    & svg {
      height: 1.5rem;
      width: 1.6rem;
      transition: all .3s ease;
    }

  @media (max-width: 1200px) {
    right: 3rem;
  }

  @media (max-width: 650px) {
    right: 2rem;
  }
`;

const HeadingsContainer = styled.div`
  color: white;
  margin: 7.5rem 0 0 4.5rem;

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
  bottom: -2rem;
  border: 2px solid white;
  border-radius: 50%;
  width: 200px;
  height: auto;

  @media (max-width: 1200px) {
    right: 3rem;
  }

  @media (max-width: 650px) {
    width: 150px;
    right: 2rem;
    bottom: -1rem;
  }
`;