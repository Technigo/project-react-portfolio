import React from 'react';
import GitHUbIcon from 'icons/github.svg'
import LinkedInIcon from 'icons/linkedin.svg'
import StackIcon from 'icons/stack.svg';
import ProfileImage from 'styles/ProfileImage';
import HeaderStyling from 'styles/HeaderStyling';

const Header = () => {
  return (
    <HeaderStyling>
      <header className="section header">
        <div className="social-media-links">
          <div className="logo">
            <a
              href="https://www.linkedin.com/in/miadahlgren/"
              target="_blank"
              rel="noreferrer">
              <img alt="LinkedIn" src={LinkedInIcon} />
            </a>
          </div>
          <div className="logo">
            <a href="https://github.com/miadahlgren" target="_blank" rel="noreferrer">
              <img alt="Github" src={GitHUbIcon} />
            </a>
          </div>
          <div className="logo">
            <a
              href="https://stackoverflow.com/users/19384439/"
              target="_blank"
              rel="noreferrer">
              <img alt="Stackoverflow" src={StackIcon} />
            </a>
          </div>
        </div>

        <ProfileImage><section className="profile-pic" /></ProfileImage>
        <div className="header-text">
          <h1 lang="en">Portfolio</h1>
          <h3 className="name">Mia Dahlgren</h3>
          <h2 className="role">Front-end developer</h2>
          <h3 className="description">with a background as a curious bug hunter</h3>
        </div>

      </header>
    </HeaderStyling>

  );
}

export default Header
