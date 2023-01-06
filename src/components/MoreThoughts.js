import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, SectionSubHeading, OuterWrapper } from '../library/GlobalStyles'

export const MoreThoughts = ({ subTitle }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionSubHeading>MORE THOUGHTS</SectionSubHeading>
        <a href="INSERT-LINK-TO-PROJECTS-NETLIFY">
          <InfoContainer>
            <SubTitle>{subTitle}</SubTitle>
            <SubParagraph>
                  Project to display the weather in a chosen city with info from an
                  API
            </SubParagraph>
          </InfoContainer>
        </a>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export const InfoContainer = styled.div`
  display: flex;
`;

export const OtherProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const SubTitle = styled.h4`
  color: red;
  text-decoration: underline;
  margin-right: 1%;
  font-size: 18px;
  font-weight: bold;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;

export const SubParagraph = styled.p`
  color: black;
  text-decoration: underline;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;