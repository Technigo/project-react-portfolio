import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './Shared/ContentWrapper';

const OtherProjects = () => {
  const OtherProjectStyle = styled.div`
  background-color: var(--thirdBackground); 
  border: solid 2px red;
  // display: row;
  // justify-content: center;
  // padding: 10px 0 40px 0;
  // font-family: Montserrat, sans-serif;
  // font-weight: 400;
  // text-align: center;
`
  return (
    <ContentWrapper as="section">
      <OtherProjectStyle>
        <div className="box-title"><h2 className="title-small">OTHER PROJECTS</h2></div>
        <div className="box">
          <div className="project-row">
            <a href="https://kristinandpetrasmusicapp.netlify.app/" target="_blank" rel="noreferrer">
              <p className="text" role="contentinfo"><span className="project-title-other">MUSIC RELEASES </span> - A project in React, fetching data from an API.</p>
            </a>
          </div>
          <div className="project-button">
            <p className="button">HTML5</p>
            <p className="button">CSS3</p>
            <p className="button">Javascript</p>
            <p className="button">React</p>
          </div>
          <div className="project-row">
            <a href="https://chat-bot-table-booker.netlify.app/" target="_blank" rel="noreferrer"><p className="text" role="contentinfo"><span className="project-title-other">CHATBOT</span> - A project focusing on basic javascript. &gt;&gt;</p></a>
          </div>
          <div className="project-button">
            <p className="button">HTML5</p>
            <p className="button">CSS3</p>
            <p className="button">Javascript</p>
          </div>
        </div>
      </OtherProjectStyle>
    </ContentWrapper>
  );
};
export default OtherProjects;
