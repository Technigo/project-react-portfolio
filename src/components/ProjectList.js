import React from 'react';
import styled from 'styled-components';
import { ContainerWhite, HeaderContainer, SectionHeader, TagWrapper, TagWrapperText } from 'GlobalStyles';
import data from 'data.json'

/* ---------- Styled components ----------- */

const Link = styled.a`
font-family:"Roboto", sans-serif;
text-decoration:none;
color: black; 
&:hover {
  text-decoration: none; 
  color: black; 
  font-weight: bold; 
} 

 `

const List = styled.div`
display: flex; 
flex-direction:column; 
`
const Icons = styled.span`
color: orange; `

const ProjectList = () => {
  return (
    <ContainerWhite>
      <HeaderContainer>
        <SectionHeader>Other Projects</SectionHeader>
      </HeaderContainer>
      {data.slice(4, 15).map((projectList) => (
        <List key={projectList.id}>
          <Link
            href={projectList.url_netlify}
            target="_blank"
            rel="noreferrer">
            {projectList.title_description}
            <Icons>  &gt;&gt;</Icons>
          </Link>

          <TagWrapper>
            {projectList.tags.map((tag) => (
              <TagWrapperText key={tag.id}>{tag.tech}</TagWrapperText>
            ))}
          </TagWrapper>
        </List>
      ))}

    </ContainerWhite>
  )
}
export default ProjectList