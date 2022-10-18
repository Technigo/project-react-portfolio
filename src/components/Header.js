import React from 'react';
import styled from 'styled-components';
import liIcon from '../assets/linkedin_icon.png';
import ghIcon from '../assets/github_icon.png';
import soIcon from '../assets/stack_overflow_icon.png';

const Header = () => {
  return (
    <StyledHeader>
      <IconsContainer>
        <a
          href="https://www.linkedin.com/in/fredrik-holm-10406b106/"
          target="_blank"
          rel="noreferrer">
          <img
            src={liIcon}
            alt="link to my profile on linkedin" />
        </a>
        <a
          href="https://github.com/karlfredrikholm/"
          target="_blank"
          rel="noreferrer">
          <img
            src={ghIcon}
            alt="link to myh profile on github" />
        </a>
        <a
          href="https://stackoverflow.com/users/19384002/fredrik-holm"
          target="_blank"
          rel="noreferrer">
          <img
            src={soIcon}
            alt="link to my profile on stack overflow" />
        </a>
      </IconsContainer>
      <HeadingsContainer>
        <NameHeading>Portfolio: Fredrik Holm</NameHeading>
        <TitleHeading1>Frontend developer</TitleHeading1>
        <TitleHeading2>with organizational skills</TitleHeading2>
      </HeadingsContainer>

      <ProfileImage src="./img/profile-pic.jpeg" alt="me" />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: relative;
  background: rgb(255, 132, 24);
  background: linear-gradient(
    354deg,
    rgba(128, 136, 255, 1) 0%,
    rgba(255, 132, 24, 1) 100%
  );
  color: white;
  width: 100%;
  height: 400px;
  padding-top: 1px;
`

const IconsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1.5rem;
  position: absolute;
  top: 2.5rem;
  right: 4.5rem;

  & img {
    height: auto;
    width: 55px;
  }
`

const HeadingsContainer = styled.div`
  color: white;
  margin: 7.5rem 0 0 4.5rem;
`

const NameHeading = styled.h1`
  font-family: var(--sub-font);
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
`

const TitleHeading1 = styled.h2`
  font-family: var(--main-font);
  font-size: 3rem;
  font-weight: 700;
`

const TitleHeading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`

const ProfileImage = styled.img`
  position: absolute;
  right: 4.5rem;
  bottom: -2rem;
  border: 2px solid white;
  border-radius: 50%;
  width: 200px;
  height: auto;
`