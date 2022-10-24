import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';
import ColorTitle from './Shared/ColorTitle';
import LinkinLogotypBlack from './Assets/Logo_linkedin_black.svg';
import GithubLogotypeBlack from './Assets/Logo_github_black.svg';
import Icons from './Shared/Icons';

const ForMore = () => {
  const ForMoreStyle = styled.div`
    display: row;
    justify-content: center;
    text-align: center;
    padding: 45px 0 60px 0;

    .links {
      font-family: Roboto, sans-serif;
      font-size: 15px;
      font-weight: 600;
      margin: 10px 0 10px 0;
    }
    .sub-title {
      font-size: 15px;
      padding: 0 6px;
    }
  `;
  return (
    <ContentWrapper as="section" backgroundColor="var(--thirdBackground)">
      <ColorTitle background="var(--fourthTitle)" title="FOR MORE" />
      <ForMoreStyle>
        <div className="icon-container">
          <Icons
            githubLogotype={GithubLogotypeBlack}
            linkinLogotyp={LinkinLogotypBlack}
            padding="40px" />
          <a href="https://github.com/petrasson"><div className="sub-title">GITHUB</div></a>
          <a href="https://www.linkedin.com/in/petra-eriksson-623b6a163/"><div className="sub-title">LINKEDIN</div></a>
        </div>
      </ForMoreStyle>
    </ContentWrapper>
  );
};
export default ForMore;
