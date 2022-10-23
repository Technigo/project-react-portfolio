import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';
import ColorTitle from './Shared/ColorTitle';
import LinkinLogotypBlack from './Logo_linkedin_black.svg';
import GithubLogotypeBlack from './Logo_github_black.svg';
import Icons from './Shared/Icons';

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
        <div className="icon-wrapper"><Icons
          githubLogotype={GithubLogotypeBlack}
          linkinLogotyp={LinkinLogotypBlack} />
        </div>
      </ForMoreStyle>
    </ContentWrapper>
  );
};
export default ForMore;
