import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';
import Image from '../Assets/Petra.jpg';
import Icons from './Shared/Icons';

const Header = () => {
  const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--secondaryBackground);

    .profile-image {
      width: 40%;
      border-radius: 50%;
      border: solid 2px var(--secondaryBackground);
      margin-top: 40px;
    }

    @media (min-width: 667px) and (max-width: 1024px) {
      position: relative;

      .profile-image {
        position: absolute;
        right: 24%;
        bottom: -10%;
        top: auto;
        width: 17rem;
      }
    }

    @media (min-width: 1025px) {
      .profile-image {
        position: absolute;
        right: 0%;
        bottom: -10%;
        top: auto;
        width: 17rem;
      }
    }
  `;
  const HeaderTextWrapper = styled.div`
    padding: 40px 0px;

    .header-name {
      // font-weight: 100;
      font-size: 16px;
      font-family: Roboto, sans-serif;
      line-height: 22px;
    }

    .lighter {
      font-weight: 300;
      color: black;
    }

    .header-title {
      margin: 15px 0 8px 0;
      font-weight: 600;
      font-size: 40px;
      line-height: 35px;
    }

    .header-subtitle {
      font-weight: 600;
      line-height: 23px;
      margin-bottom: 25px;
    }

    @media (min-width: 667px) and (max-width: 1024px) {
      position: relative;

      .header-name {
        padding: 0px 0px 25px 0px;
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
        line-height: 20px;
      }
    }

    @media (min-width: 1025px) {
      .header-name {
        padding: 0 0 20px 0;
        font-size: 22px;
        line-height: 20px;
      }

      .header-title {
        margin: 50px 0 30px 0;
        font-size: 85px;
        line-height: 67px;
      }

      .header-subtitle {
        font-size: 26px;
        line-height: 20px;
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
          <h2 className="header-subtitle">+ user research and design</h2>
        </HeaderTextWrapper>
        <Icons />
      </HeaderWrapper>
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
