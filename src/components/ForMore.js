import React from 'react';
import styled from 'styled-components';
import heroImage2 from 'assets/heroImage2.jpg'
import LinkedinIcon from 'assets/Linkedin_icon.png';
import GithubIcon from 'assets/Github_icon.png';
/* import StackOverflowIcon from 'assets/StackO_icon.png'; */
import { GITHUB_URL, LINKEDIN_URL/* , STACKOVERFLOW_URL */ } from 'utils/Urls';

export const ForMoreWrapper = styled.div`
background-image: url(${heroImage2});
background-size: cover;
margin:0;
width: 100%;
color: black;
display:flex;
flex-direction: column;
align-items:center;
padding-bottom:30px;

@media (min-width: 668px) and (max-width: 1023px) {

}
@media (min-width: 1024px) {
  
}
`;

export const ForMoreHeader = styled.h2`
  font-size: 22px;
  font-family: 'Montserrat', sans-serif;
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px 15px;
  margin-bottom:0;

  @media (min-width: 668px) and (max-width: 1023px) {
    font-size: 48px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 1;
  }
`;

export const ForMoreIconsWrapper = styled.div`
  width:70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 7% 0 10% 0; 

  img {
    height: 20px;
    width: 20px;
    margin: auto;
    display: block;
  }

  img:hover {
    opacity: 0.5;
  }

  p:hover {
    opacity: 0.5;
  }

 .iconContainer {
    height: 20px;
    width: 20px;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
    padding: 13px;
  }

  p {
    color: black;
    font-size: 11px;
    font-weight: bold;
    padding: 20px 0px 0px;
  }

  a {
    text-decoration: none;
  }
     
@media (min-width: 668px) and (max-width: 1023px) }

 
@media (min-width: 1024px) {
  img {
    width: 60px;
    height: 60px;
    display: block;
    padding-top:50px;

          }
  .iconContainer {
      height: 160px;
      width: 160px;
      display:flex;
      border: 6px solid black;
  p{
    font-size: 25px;
    padding: 70px 0 0 0;
    }
  }
`;

export const ForMore = ({ color }) => {
  return (
    <ForMoreWrapper>
      <ForMoreHeader color={color}>FOR MORE</ForMoreHeader>
      <ForMoreIconsWrapper>
        <div className="iconContainer">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <img src={LinkedinIcon} lang="eng" alt="Linkedin icon" />
            <p>LINKEDIN</p>
          </a>
        </div>
        <div className="iconContainer">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <img src={GithubIcon} lang="eng" alt="Github icon" />
            <p>GITHUB</p>
          </a>
        </div>
        {/* <div className="iconContainer">
           <a href={STACKOVERFLOW_URL} target="_blank" rel="noreferrer">
            <img
              src={StackOverflowIcon}
              lang="eng"
              alt="Stackoverflow icon" />
            <p>STACK OVERFLOW</p>
            </a>
        </div> */}
      </ForMoreIconsWrapper>
    </ForMoreWrapper>
  );
};