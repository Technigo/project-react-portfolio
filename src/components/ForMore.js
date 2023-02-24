/* eslint-disable react/jsx-props-no-multi-spaces */
import React from 'react';
import styled from 'styled-components';
import heroLinkedin from '../assets/linkedin_icon.png';
import heroGithub from '../assets/github_icon.png';
import heroStackOverflow from '../assets/stackoverflow_icon.png';

export const ForMore = () => {
  return (
    <ForMoreOuterWrapper>
      <ForMoreInnerWrapper>
        <h5>FOR MORE</h5>
        <ForMoreIconsContainer>
          <SingleIconContainer>
            <a href="https://www.linkedin.com/in/maria-wellander-87043b124/" target="_blank" rel="noreferrer">
              <imgContainer>
                <img src={heroLinkedin} lang="eng" alt="Linkedin icon" />
              </imgContainer>
              <p>LINKEDIN</p>
            </a>
          </SingleIconContainer>
          <SingleIconContainer>
            <a href="https://github.com/MariaWellander" target="_blank" rel="noreferrer">
              <imgContainer>
                <img src={heroGithub} lang="eng" alt="Github icon" />
              </imgContainer>
              <p>GITHUB</p>
            </a>
          </SingleIconContainer>
          <SingleIconContainer>
            <a href="https://stackoverflow.com/users/19748840/maria-wellander" target="_blank" rel="noreferrer">
              <imgContainer>
                <img src={heroStackOverflow} lang="eng" alt="Stackoverflow icon" />
              </imgContainer>
              <p>STACK OVERFLOW</p>
            </a>
          </SingleIconContainer>
        </ForMoreIconsContainer>
      </ForMoreInnerWrapper>
    </ForMoreOuterWrapper>
  );
};

export const ForMoreOuterWrapper = styled.section`
    background-color: rgb(135,47,0,0.6);
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const ForMoreInnerWrapper = styled.div`
    max-width: 900px;
    width: 80vw;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
`;

export const ForMoreIconsContainer = styled.div`
    width:80vw;
    max-width: 700px;
    min-width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 30px;
    gap: 30px;

  img {
    height: 40px;
    width: 40px;
    margin: auto;
    display: block;
  }
`;

export const SingleIconContainer = styled.div`
    height: 40px;
    width: 40px;
    padding: 20px;
    border: solid var(--orange);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
    
    a {
      text-decoration:none;
    }

    :hover {
      border: solid white;
    }

    p {
      color: white;
      margin-top: 40px;
      font-size: 12px;
    }

      @media (min-width: 668px){
        font-size: 16px
      }
`;