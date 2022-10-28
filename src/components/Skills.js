import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper, Content } from './styles/Wrappers';

export const Skills = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <h3>Skills</h3>
        <List>
          <ClonedContent>
            <h4>code</h4>
            <div>
              <p>HTML</p>
              <p>JavaScript</p>
              <p>CSS</p>
              <p>GitHub</p>
              <p>React</p>
            </div>
          </ClonedContent>

          <ClonedContent>
            <h4>More</h4>
            <div>
              <p>Agile</p>
            </div>
          </ClonedContent>

          <ClonedContent>
            <h4>Toolbox</h4>
            <div>
              <p>Slack</p>
              <p>Figma</p>
              <p>CatiaV5</p>
            </div>
          </ClonedContent>

          <ClonedContent>
            <h4>Upcoming</h4>
            <div>
              <p>Node.js</p>
              <p>Redux</p>
            </div>
          </ClonedContent>
        </List>
      </InnerWrapper>
    </BlockSection>
  );
};

const ClonedContent = styled(Content)`
  text-align: center;
`;

const List = styled.div`
display: grid;
grid-template-columns: 1fr 1fr ;

@media (min-width: 768px) {
  grid-template-columns: 1fr 1fr 1fr ;
}
@media (min-width: 1024px) {
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
