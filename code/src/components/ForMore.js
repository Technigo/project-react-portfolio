import React from 'react'
import styled from 'styled-components/macro'

import { ContainerWrapper, FlexWrapper, SectionWrapperGradiant, SectionHeadings } from 'GlobalStyles';

// react component

export const ForMore = () => {
  return (
    <SectionWrapperGradiant>
      <ContainerWrapper>
        <FlexWrapper>
          <SectionHeadingsGr>for more</SectionHeadingsGr>
          <HeaderIconsForMore>
            <a href="https://www.linkedin.com/in/nina-berggren" target="_blank" rel="noreferrer" aria-label="Go to Linked In page">
              <i className="fab fa-linkedin-in" alt="LinkedIn icon" />
            </a>
            <a href="https://github.com/NinaBerggren" target="_blank" rel="noreferrer" aria-label="Go to Github page">
              <i className="fab fa-github" alt="GitHub icon" />
            </a>
            <a href="https://stackoverflow.com/users/19384658/nina-berggren" target="_blank" rel="noreferrer" aria-label="Go to Stackoverflow page">
              <i className="fab fa-stack-overflow" alt="Stack Overflow icon" />
            </a>
          </HeaderIconsForMore>
        </FlexWrapper>
      </ContainerWrapper>
    </SectionWrapperGradiant>
  )
}

// styled component

const HeaderIconsForMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* width: 100px; */
  font-size: 3rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    transition: background-color .4s;
  }  

  i {
    color: var(--clr-dark);
  }

  i:hover {
    color: var(--clr-light)
  }

  a:hover{
    background-color: var(--clr-dark);
    /* color: var(--clr-lightgrey); */
  }

  a:visited {
    color: var(--clr-light);
    text-decoration: none;
  } 

  /* @media (min-width: 1024px) {
    right: 18%;
    top: 10%;
    font-size: 3rem;

    a {
      height: 65px;
      width: 65px;
    }
  } */
`;

// ---------- transperent heder for gradient

const SectionHeadingsGr = styled(SectionHeadings)`
  color: white;
  background-color: var(--clr-dark);
  mix-blend-mode: multiply;
  margin: 3em 0 2em 0;
`;
