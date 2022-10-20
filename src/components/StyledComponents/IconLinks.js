import React from 'react';
import styled from 'styled-components';

import LinkedIn from 'assets/icon-linkedin-white.svg';
import Github from 'assets/icon-github-white.svg';
import StackOverflow from 'assets/icon-stack-white.svg';

export const IconLinks = () => {
  return (
    <LinksWrapper>
      <Link>
        <a
          href="https://www.linkedin.com/in/saralie-bognandi-439939b3/"
          role="button"
          aria-pressed="false"
          aria-label="linkedin"
          target="_blank"
          rel="noreferrer">
          <img alt="LinkedIn logo" src={LinkedIn} />
        </a>
      </Link>
      <Link>
        <a
          href="https://github.com/Scarylie"
          role="button"
          aria-pressed="false"
          aria-label="github"
          target="_blank"
          rel="noreferrer">
          <img alt="github logo" src={Github} />
        </a>
      </Link>
      <Link>
        <a
          href="https://stackoverflow.com/users/19424645/saralie"
          role="button"
          aria-pressed="false"
          aria-label="StackOverflow"
          target="_blank"
          rel="noreferrer">
          <img alt="StackOverflow logo" src={StackOverflow} />
        </a>
      </Link>
    </LinksWrapper>
  );
};

const LinksWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 10px;
`;

const Link = styled.div`
  margin-top: 2em;
  img {
    height: 3em;
    width: 3em;
  }

  @media (min-width: 768px) {
    img {
      height: 4em;
      width: 4em;
    }
  }
  @media (min-width: 1024px) {
    img {
      height: 4.2em;
      width: 4.2em;
    }
  }
`;
