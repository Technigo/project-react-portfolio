import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';

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
const OtherProjects = () => {
  return (
    <ContentWrapper
      as="section"
      backgroundColor="var(--thirdBackground)">
      <OtherProjectStyle>
        <div className="box-title"><h2 className="sub-title">OTHER PROJECTS</h2></div>
        <div className="project-row">
          <a href="https://kristinandpetrasmusicapp.netlify.app/" target="_blank" rel="noreferrer">
            <h2 className="small-title">MUSIC RELEASES <span className="lighter"> - A project in React, fetching data from an API. &gt;&gt;</span></h2>
          </a>

          <div className="project-row">
            <a href="https://chat-bot-table-booker.netlify.app/" target="_blank" rel="noreferrer">
              <h2 className="small-title">CHATBOT <span className="lighter"> - A project focusing on basic javascript. &gt;&gt;</span></h2>
            </a>
          </div>
        </div>
      </OtherProjectStyle>
    </ContentWrapper>
  );
};
export default OtherProjects;
