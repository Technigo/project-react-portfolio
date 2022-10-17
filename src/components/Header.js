import React from 'react';
import { StyledHeader } from './styled/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <div className="top-icons">
        <a
          href="https://www.linkedin.com/in/fredrik-holm-10406b106/"
          target="_blank"
          rel="noreferrer">
          <img
            src="./icons/linkedin_icon.png"
            alt="link to my profile on linkedin" />
        </a>
        <a
          href="https://github.com/karlfredrikholm/"
          target="_blank"
          rel="noreferrer">
          <img
            src="./icons/github_icon.png"
            alt="link to myh profile on github" />
        </a>
        <a
          href="https://stackoverflow.com/users/19384002/fredrik-holm"
          target="_blank"
          rel="noreferrer">
          <img
            src="./icons/stack_overflow_icon.png"
            alt="link to my profile on stack overflow" />
        </a>
      </div>
      <div className="top-headings-container">
        <h1 className="name-heading">Portfolio: Fredrik Holm</h1>
        <h2 className="title-heading-1">Frontend developer</h2>
        <h2 className="title-heading-2">with organizational skills</h2>
      </div>

      <img className="profile-pic" src="./img/profile-pic.jpeg" alt="me" />
    </StyledHeader>
  );
};

export default Header;
