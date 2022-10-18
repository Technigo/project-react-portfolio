import React from 'react';
import styled from 'styled-components';
import { BUSINESSSITE_URL } from 'utils/Urls'
import { SectionTitle, Wrapper, Heading } from './GlobalStyles';

export const OtherProjects = () => {
  return (
    <Wrapper primary>
      <SectionTitle>OTHER PROJECTS</SectionTitle>
      <OtherProjectsList>
        <OtherProjectDisplay>
          <a
            href={BUSINESSSITE_URL}
            target="_blank"
            rel="noreferrer">
            <Heading>Business Site: Stockholm Tour.</Heading>
          </a>
          <p>A website created in mob programming session that
             contains forms and JavaScript for people who wants to sign up for an event
          </p>

        </OtherProjectDisplay>
        <div className="other-projects-tags">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Mob Programming</p>
          <p className="tag-github-icon">Github</p>
        </div>
      </OtherProjectsList>
    </Wrapper>
  )
}

const OtherProjectsList = styled.div`
display: grid;
grid-template-columns: 100%;
margin: 10% 0;
padding-top: 5%;
`
const OtherProjectDisplay = styled.div`

 a{
    text-decoration: overline #614124;
    font-size: 15px;
    display: inline-block;
    font-weight: 800;

    &:hover{
        text-decoration: underline; 
    }
}    

p{
    color: #614124;
    margin-top: 5%;
    display: inline; 
}
`