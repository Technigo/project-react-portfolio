import React from 'react';
import styled from 'styled-components';
import { LinkedInSvg, GitHubSvg, StackSvg } from 'components/Icons';
import { BlockSectionWhite, InnerWrapper } from './styles/Wrappers';

export const More = () => {
  return (
    <BlockSectionWhite>
      <InnerWrapper>
        <h3>More</h3>
        <LinksWrapper>
          <Link>
            <a
              href="https://www.linkedin.com/in/saralie-bognandi-439939b3/"
              role="button"
              aria-pressed="false"
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer">
              <div>
                <LinkedInSvg />
                <p>LinkedIn</p>
              </div>
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
              <div>
                <GitHubSvg />
                <p>GitHub</p>
              </div>
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
              <div>
                <StackSvg />
                <p>Stack Overflow</p>
              </div>
            </a>
          </Link>
        </LinksWrapper>
      </InnerWrapper>
    </BlockSectionWhite>
  );
};

const LinksWrapper = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 3em;
  align-items: center;
`;

const Link = styled.div`
  margin-top: 2em;

  & svg {
    background-color: pink;
    border-radius: 50%;
    padding: 1em;
    width: 3.5rem;
    height: 3.5rem;
  }

  & p {
    color: pink;
    text-decoration: none;
    text-transform: none;
    width: fit-content;
  }
`;
