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
  margin: 0 0 30px 0;
  border: solid 3px red;

  .profile-image {
    width: 40%;
    border-radius: 50%;
    border: solid 2px var(--secondaryBackground);
    margin-top: 40px;
  }
  
  // .icon-wrapper{
  //   border: solid 2px green;
  //   }


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

    .icon-wrapper{
      border: solid 2px blue;
      position: absolute;
      right: 0%;
      top: 14%;
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
      bottom: -22%;
      top: auto;
      width: 15rem;
    }
    .icon-wrapper{
      border: solid 2px blue;
      position: absolute;
      right: 10%;
      top: 0%;
      }



  }
`;
  const HeaderTextWrapper = styled.div`
  padding: 30px 0;
  border: solid 3px black;
  font-weight: 600;
  font-family: Montserrat, sans-serif;

  .header-name {
    font-size: 15px;
    line-height: 22px;
    font-family: Roboto, sans-serif;
  }
  .lighter {
    font-weight: light;
  }

  .header-title {
    margin: 17px 0 20px 0;
    font-family: Montserrat, sans-serif;
    font-size: 40px;
    line-height: 35px;
  }

  .header-subtitle {
    margin-bottom: 25px;
  }
 

  @media (min-width: 667px) and (max-width: 1024px) {
    position: relative;
    margin-top: 60px;
    border: solid 3px yellow;
    
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
      margin: 50px 0 30px 0;
      font-size: 85px;
      line-height: 67px;
    }

    .header-subtitle {
      font-size: 26px;
      line-height: 20px;
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
          <h2 className="header-subtitle">+ user research & design</h2>
        </HeaderTextWrapper>
        <div className="icon-wrapper">
          <Icons />
        </div>
      </HeaderWrapper>
    </ContentWrapper>
  );
};
export default Header;