import React from 'react';
import styled from 'styled-components';
import { ContainerWhite, HeaderContainer, SectionHeader } from 'GlobalStyles';

const Link = styled.a`
font-family:"Roboto", sans-serif;
display: flex; 
flex-direction:column; 
grid-column:2 / 2; 
text-decoration:none;`

const List = styled.div`
display: grid; 
grid-column: 1 / 2; `

const ArticletList = () => {
  return (
    <ContainerWhite>
      <HeaderContainer>
        <SectionHeader>More thoughts</SectionHeader>
      </HeaderContainer>
      <List>
        <Link
          href=""
          target="_blank"
          rel="noreferrer">
          read more here
        </Link>
      </List>

    </ContainerWhite>
  )
}
export default ArticletList