import React from 'react';
import styled from 'styled-components';
import { BUSINESSSITE_URL } from 'utils/Urls'
import { SectionTitle, Wrapper, Heading, TagIcons, ProjectParagraph } from './GlobalStyles';

export const OtherProjects = () => {
  return (
    <Wrapper primary>
      <SectionTitle>OTHER PROJECTS</SectionTitle>
      <OtherProjectsList>
        <OtherProjectsDisplay>
          <a
            href={BUSINESSSITE_URL}
            target="_blank"
            rel="noreferrer">
            <OtherProjectsHeading>Business Site: Stockholm Tour.</OtherProjectsHeading>
          </a>
          <ProjectParagraph primary>A website created in mob programming session that
             contains forms and JavaScript for people who wants to sign up for an event
          </ProjectParagraph>
        </OtherProjectsDisplay>
        <OtherProjectsTags>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Mob Programming</p>
          <p className="tag-github-icon">Github</p>
        </OtherProjectsTags>

      </OtherProjectsList>
    </Wrapper>
  )
}

const OtherProjectsList = styled.div`
padding-top: 5%;
`
const OtherProjectsDisplay = styled.div`
 margin-bottom: 2%;
a{
    text-decoration: overline #614124;
    font-size: 15px;
    display: inline-block;
    font-weight: 800;

    &:hover{
        text-decoration: underline; 
    }
}
}    
`
const OtherProjectsHeading = styled(Heading)`
margin: 0;
`

const OtherProjectsTags = styled(TagIcons)`
margin: 0;
`