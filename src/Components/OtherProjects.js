import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';

const OtherProjectStyle = styled.div`
  background-color: var(--thirdBackground);
  padding: 45px 0;

  .sub-title{
    display: flex;
    justify-content: center;
  }

  .other-projects-wrapper{
    padding: 15px 0px 15px 0px;
    margin: 0px;
  }

  .project-title{
    display: inline;
  }

  .link-other-projects {
    text-decoration: none;
  }

  .project-row{
    display: inline;
    margin: 30px 0;
  }
 
`;
const OtherProjects = () => {
  return (
    <ContentWrapper as="section" backgroundColor="var(--thirdBackground)">
      <OtherProjectStyle>
        <div className="title-other-projects-wrapper">
          <h2 className="sub-title">OTHER PROJECTS</h2>
        </div>
        <div className="other-projects-wrapper">
          <div className="project-row">
            <a
              className="link-other-projects"
              href="https://kristinandpetrasmusicapp.netlify.app/"
              target="_blank"
              rel="noreferrer">
              <h2 className="project-title">MUSIC RELEASES</h2>
              <div className="text">- A project in React, fetching data from an API. <h2 className="project-title"> &gt;&gt;</h2></div>
            </a>
          </div>

          <div className="project-row">
            <a
              className="link-other-projects"
              href="https://chat-bot-table-booker.netlify.app/"
              target="_blank"
              rel="noreferrer">
              <h2 className="project-title">CHATBOT</h2>
              <div className="text">- A project focusing on basic javascript.<h2 className="project-title"> &gt;&gt;</h2></div>
            </a>
          </div>
        </div>
      </OtherProjectStyle>
    </ContentWrapper>
  );
};
export default OtherProjects;
