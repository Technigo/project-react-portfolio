import React from 'react';
import SectionHeaderStyling from 'styles/SectionHeaderStyling';
import styled from 'styled-components';
import Stack from '../icons/stack.svg';
import GitHub from '../icons/github.svg';
import LinkedIn from '../icons/linkedin.svg';

const More = () => {
  return (
    <MoreSectionStyling>
      <section className="section more">
        <SectionHeaderStyling><div><h2>For More</h2></div></SectionHeaderStyling>
        <div className="big-social-media-links">

          <div className="logo">
            <a
              href="https://www.linkedin.com/in/miadahlgren/"
              target="_blank"
              rel="noreferrer">
              <img alt="LinkedIn" src={LinkedIn} />
            </a>
          </div>

          <div className="logo">
            <a href="https://github.com/miadahlgren" target="_blank" rel="noreferrer">
              <img alt="Github" src={GitHub} />
            </a>
          </div>

          <div className="logo">
            <a
              href="https://stackoverflow.com/users/19384439/"
              target="_blank"
              rel="noreferrer">
              <img className="stack" alt="Stackoverflow" src={Stack} />
            </a>
          </div>
        </div>
      </section>
    </MoreSectionStyling>)
}

export default More

const MoreSectionStyling = styled.section`
  .section.more{
    min-height: 200px;
    top: 2830px;
    align-items:center;
    flex-direction: column;
    } 
    
    .section.more img{
    margin-top: 10px;
    height: 40px;
    width: 40px;
    border: tan solid 1.5px;
    border-radius: 50%;
    padding: 1px;
    }

    .big-social-media-links{
      display: flex;
      flex-direction: row;
      gap: 5vw;

       }
`