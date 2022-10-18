import React from 'react';
import ContentWrapper from './Shared/ContentWrapper';

const Header = () => {
  return (
    <ContentWrapper
      as="header"
      backgroundColor="black">
      <div className="header-image">
        <div className="header-wrapper">
          <div className="header-text" role="contentinfo">
            <h3 className="header-name">
              <span className="lighter">PORTFOLIO: </span>PETRA ERIKSSON
            </h3>
            <h1 className="header-title">frontend<br />developer<br /></h1>
            <h2 className="header-subtitle">+ user research and design</h2>
          </div>
          <div className="icons-top" role="link">
            <a href="https://www.linkedin.com/in/petra-eriksson-623b6a163/"><img className="icon-picture" src="./icons/linkedin_logotype_white.png" alt="Go to Petras LinkedIn" target="_blank" /></a>
            <a href="https://github.com/petrasson/"><img className="icon-picture" src="./icons/github_logotype_white.png" alt="Go to Petras Github" target="_blank" /></a>
          </div>
        </div>
      </div>
    </ContentWrapper>

  );
};
export default Header;
/*
<img
            className="profile-image"
            src="./Images/Petra.jpg"
            alt="profile picture of Petra" />

  header-container
*/