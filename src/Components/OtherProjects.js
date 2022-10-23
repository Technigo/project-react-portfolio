import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';

const OtherProjectStyle = styled.div`
background-color: var(--thirdBackground);

.other-projects{
  text-decoration: none; 
}
.other-project-text{
  font-weight: 400;
  color: var(--seventhText);
}
`
const OtherProjects = () => {
  return (
    <ContentWrapper
      as="section"
      backgroundColor="var(--thirdBackground)">
      <OtherProjectStyle>
        <div className="box-title"><h2 className="sub-title">OTHER PROJECTS</h2></div>
        <div className="project-row">
          <a className="other-projects" href="https://kristinandpetrasmusicapp.netlify.app/" target="_blank" rel="noreferrer">
            <h2 className="small-title">MUSIC RELEASES <span className="other-project-text"> - A project in React, fetching data from an API. &gt;&gt;</span></h2>
          </a>

          <div className="project-row">
            <a className="other-projects" href="https://chat-bot-table-booker.netlify.app/" target="_blank" rel="noreferrer">
              <h2 className="small-title">CHATBOT <span className="other-project-text"> - A project focusing on basic javascript. &gt;&gt;</span></h2>
            </a>
          </div>
        </div>
      </OtherProjectStyle>
    </ContentWrapper>
  );
};
export default OtherProjects;
