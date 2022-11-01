import React from 'react';
import styled from 'styled-components';
import { LinkedInSvg, GitHubSvg, StackSvg } from 'components/Icons';
import { InnerWrapper } from './styles/Wrappers';
// import backgroundImg from '../assets/forest.jpeg';
import backgroundImg from '../assets/watercolor.png';
import profileImg from '../assets/sar.bild.jpg';
// import { IconLinks } from './styles/IconLinks';

export const Header = () => {
  return (
    <HeaderBackground>
      {/* <BlockSection> */}
      <InnerWrapper>
        <HeaderImagesWrapper>
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
                </div>
              </a>
            </Link>
          </LinksWrapper>
          <ProfileImage src={profileImg} alt="Saralie Bognandi" />
        </HeaderImagesWrapper>
        <HeaderInfo>
          <p>
            Portfolio: <span>Saralie Bognandi</span>
          </p>
          <h1>frontend developer</h1>
          <h2>
            <span>& design engineer</span>
          </h2>
        </HeaderInfo>
      </InnerWrapper>
      {/* </BlockSection> */}
    </HeaderBackground>
  );
};

const HeaderBackground = styled.header`
  position: relative;
  background-image: linear-gradient(
      rgba(11, 11, 11, 0.2),
      rgba(11, 11, 11, 0.2)
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70vh;
  width: 100%;

  @media (min-width: 768px) {
    height: 80vh;
  }
  @media (min-width: 1024px) {
  }
`;

const HeaderInfo = styled.div`
  position: absolute;
  left: 0;
  top: 5em;
  color: white;
  font-size: 1.6em;
  max-width: 70%;

  h1 {
    color: pink;
  }
  h2 {
  }
  p {
  }
  span {
    font-weight: lighter;
  }
  @media (min-width: 768px) {
    font-size: 2em;
  }
  @media (min-width: 1024px) {
    font-size: 2.2em;
  }
`;
const HeaderImagesWrapper = styled.div``;

const ProfileImage = styled.img`
  width: 10em;
  max-width: 200px;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: -2rem;

  @media (min-width: 768px) {
    width: 15em;
  }
  @media (min-width: 1024px) {
    width: 20em;
  }
`;

const LinksWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 10px;
`;

const Link = styled.div`
  margin-top: 2em;

  & div {
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    padding: 0.65rem 0.78rem;
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
