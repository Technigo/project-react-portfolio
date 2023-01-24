/* eslint-disable comma-dangle */
import React from 'react';
import styled from 'styled-components';
import { LinkedInSvg, GitHubSvg, StackSvg } from 'components/Icons';
import { BlockSectionWhite, InnerWrapper } from './styles/Wrappers';

export const More = () => {
  const more = [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saralie-bognandi-439939b3/',
      arialabel: 'Linkedin',
      svg: LinkedInSvg,
    },
    {
      title: 'GitHub',
      href: 'https://github.com/Scarylie',
      arialabel: 'GitHub',
      svg: GitHubSvg,
    },
    {
      title: 'StackOverflow',
      href: 'https://stackoverflow.com/users/19424645/saralie',
      arialabel: 'StackOverflow',
      svg: StackSvg,
    },
  ];

  return (
    <BlockSectionWhite>
      <InnerWrapper>
        <h3>More</h3>
        <LinksWrapper>
          {more.map((info) => {
            return (
              <Link key={info.title}>
                <a
                  href={info.href}
                  role="button"
                  aria-pressed="false"
                  aria-label={info.arialabel}
                  target="_blank"
                  rel="noreferrer">
                  <Div>
                    <info.svg />
                    <p>{info.title}</p>
                  </Div>
                </a>
              </Link>
            );
          })}
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

  a {
    color: white;
  }
`;

const Link = styled.div`
  margin-top: 2em;

  & svg {
    background-color: #fa382f;
    border-radius: 50px;
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
