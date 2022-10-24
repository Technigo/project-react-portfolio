import React from 'react';
import styled from 'styled-components/macro';
import LinkinLogotypWhite from './Assets/Logo_linkedin_white.svg';
import GithubLogotypeWhite from './Assets/Logo_github_white.svg';

import ContentWrapper from './Shared/ContentWrapper';
import Image from './Assets/Petra.jpg';
import Icons from './Shared/Icons';

const Header = () => {
  const HeaderWrapper = styled.div`
    position: relative;
    color: var(--secondaryBackground);
    margin: 10px 0 30px 0;
    display: flex;
    justify-content: start;
    align-items: start;

    .profile-image {
      width: 40%;
      border-radius: 50%;
      border: solid 2px var(--secondaryBackground);
      position: absolute;
      right: 0%;
      bottom: -24%;
      width: 10rem;
    }

    .icon-wrapper {
      position: absolute;
      right: 0%;
      top: 0%;
    }
    @media (min-width: 667px) and (max-width: 1024px) {
      position: relative;
      display: flex;
      justify-content: start;
      align-items: start;

      .profile-image {
        position: absolute;
        right: 0%;
        bottom: -20%;
        width: 11rem;
      }

      .icon-wrapper {
        position: absolute;
        right: 3%;
        top: 19%;
      }
    }

    @media (min-width: 1025px) {
      position: relative;
      display: flex;
      justify-content: start;
      align-items: start;
      margin: 40px 0;

      .profile-image {
        position: absolute;
        right: 0%;
        bottom: -17%;
        top: auto;
        width: 15rem;
      }
      .icon-wrapper {
        position: absolute;
        right: 5%;
        top: 27%;
      }
    }
  `;
  const HeaderTextWrapper = styled.div`
    margin-top: 120px;
    padding: 0 0 30px 0;
    font-weight: 600;
    font-family: Montserrat, sans-serif;

    .header-name {
      font-size: 12px;
      line-height: 22px;
      font-family: Roboto, sans-serif;
    }
    .lighter {
      font-weight: light;
    }

    .header-title {
      margin: 17px 0 6px 0;
      font-family: Montserrat, sans-serif;
      font-size: 42px;
      line-height: 40px;
    }

    .header-subtitle {
      margin-bottom: 25px;
      line-height: 25px;
    }

    @media (min-width: 667px) and (max-width: 1024px) {
      position: relative;
      margin-top: 60px;

      .header-name {
        font-size: 19px;
        line-height: 20px;
      }
      .header-title {
        margin: 30px 0px;
        font-size: 50px;
        line-height: 50px;
      }
      .header-subtitle {
        font-size: 25px;
        // line-height: 20px;
        margin: 0;
      }
    }

    @media (min-width: 1025px) {
      .header-name {
        padding: 0 0 20px 0;
        font-size: 22px;
        line-height: 20px;
      }

      .header-title {
        margin: 50px 0 25px 0;
        font-size: 75px;
        line-height: 63px;
      }

      .header-subtitle {
        font-size: 36px;
        line-height: 38px;
        margin: 0;
      }
    }
  `;
  return (
    <ContentWrapper
      as="header"
      backgroundColor="var(--primaryBackground)"
      position="relative">
      <HeaderWrapper>
        <img className="profile-image" src={Image} alt="headshot of Petra" />
        <HeaderTextWrapper>
          <h3 className="header-name">
            <span className="lighter">PORTFOLIO: </span>PETRA ERIKSSON
          </h3>
          <h1 className="header-title">
            frontend
            <br />
            developer
            <br />
          </h1>
          <h2 className="header-subtitle">
            + user research &<br /> design
          </h2>
        </HeaderTextWrapper>
        <div className="icon-wrapper">
          <Icons
            githubLogotype={GithubLogotypeWhite}
            linkinLogotyp={LinkinLogotypWhite} />
        </div>
      </HeaderWrapper>
    </ContentWrapper>
  );
};
export default Header;
