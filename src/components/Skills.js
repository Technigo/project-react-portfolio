import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, MainHeadline, SmallHeadline, InnerWrapper } from 'styles/GlobalStyles';

export const Skills = () => {
  return (
    <OuterWrapper backGroundcolor="#f4f4f4">
      <MainHeadline>SKILLS</MainHeadline>
      <ListWrapper backGroundcolor="#f4f4f4">
        <div>
          <SmallHeadline>CODE</SmallHeadline>
          <List>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>GitHub</li>
          </List>
        </div>
        <div>
          <SmallHeadline>TOOLBOX</SmallHeadline>
          <List>
            <li>Visual Studio Code</li>
            <li>Terminal</li>
            <li>Stack Overflow</li>
            <li>Figma</li>
            <li>Slack</li>
          </List>
        </div>
        <div>
          <SmallHeadline>UPCOMING</SmallHeadline>
          <List>
            <li>Redux</li>
            <li>Node.js</li>
          </List>
        </div>
      </ListWrapper>
    </OuterWrapper>
  )
}

export const ListWrapper = styled(InnerWrapper)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const List = styled.ul`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    list-style-type: none;
    padding-bottom: 2.5rem;
`