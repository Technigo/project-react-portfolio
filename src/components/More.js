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
              <Div>
                <LinkedInSvg />
                <p>LinkedIn</p>
              </Div>
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
              <Div>
                <GitHubSvg />
                <p>GitHub</p>
              </Div>
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
              <Div>
                <StackSvg />
                <p>Stack Overflow</p>
              </Div>
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
    background-color: #fa382f;
    border-radius: 1em;
    padding: 1em;
    width: 3.5rem;
    height: 3.5rem;
  }

  & p {
    color: #fa382f;
    font-size: 0.7em;
    // text-decoration: none;
    // text-transform: none;
    // width: fit-content;
  }
`;

const Div = styled.div`
  text-align: center;
`;
