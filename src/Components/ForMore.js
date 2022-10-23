import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';
import ColorTitle from './Shared/ColorTitle';
// import GithubLogoBlack from '../Assets/Logo_github_black';
import InkedinLogoBlack from '../Assets/Logo_linkedin_black.svg';

const ForMore = () => {
  const ForMoreStyle = styled.div`
  // background-color: var(--secondBackground); 
  display: row;
  border: solid 2px red;
  justify-content: center;
  text-align: center;
  padding: 45px 0 65px 0;
  // font-family: Montserrat, sans-serif;
  // font-weight: 400;
  // font-size: 20px;
  // line-height: 34px;
.grid-box-icons{

}
.icons-end-left{

}
.project-title{
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-weight: 600;
  // line-height: 30px;
  margin: 10px 0 10px 0;
}

`
  return (
    <ContentWrapper
      as="section"
      backgroundColor="var(--thirdBackground)">

      <ColorTitle
        background="var(--fourthTitle)"
        title="For more" />
      <ForMoreStyle>
        <div className="grid-box-icons">
          <div className="icons-end-left" role="link">
            <img className="icon" src={InkedinLogoBlack} alt="Go to Petras LinkedIn" />
            <h2 className="project-title"><a href="https://www.linkedin.com/in/petra-eriksson-623b6a163/">LINKEDIN</a></h2>
          </div>
          {/* <div className="icons-end" role="link">
            <img className="icon-picture" src={GithubLogoBlack} alt="Go to Petras Github" />
            <h2 className="project-title"><a href="https://github.com/petrasson">GITHUB</a></h2>
          </div> */}
        </div>
      </ForMoreStyle>
    </ContentWrapper>
  );
};
export default ForMore;
