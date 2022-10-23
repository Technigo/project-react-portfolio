import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';
import ColorTitle from './Shared/ColorTitle';
import LinkinLogotypBlack from './Logo_linkedin_black.svg';
import GithubLogotypeBlack from './Logo_github_black.svg';
import Icons from './Shared/Icons';

const ForMore = () => {
  const ForMoreStyle = styled.div`
  display: row;  
  justify-content: center;
  text-align: center;
  padding: 28px 0;

  .links{
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin: 10px 0 10px 0;
  }
    p{
      display: inline-block;
      padding: 0 6px;
      
}

`
  return (
    <ContentWrapper
      as="section"
      backgroundColor="var(--thirdBackground)">

      <ColorTitle
        background="var(--fourthTitle)"
        title="FOR MORE" />
      <ForMoreStyle>
        <div className="icon-wrapper"><Icons
          githubLogotype={GithubLogotypeBlack}
          linkinLogotyp={LinkinLogotypBlack}
          padding="40px" />
        </div>
        <div className="links"><p>GITHUB</p><p>LINKEDIN</p></div>
      </ForMoreStyle>
    </ContentWrapper>
  );
};
export default ForMore;
