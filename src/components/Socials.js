import React from 'react';
import styled from 'styled-components';
import { GitHubSvg, LinkedInSvg, StackSvg } from './Icons';

const Socials = () => {
  return (
    <Container>
      <h2>Socials:</h2>
      <ForMoreIcons>
        <Icons>
          <a href="https://github.com/iracuzzi/" target="_blank" rel="noreferrer">
            <GitHubSvg />
            <p>GitHub</p>
          </a>
        </Icons>
        <Icons>
          <a href="https://stackoverflow.com/users/19401006/arnau-monforte" target="_blank" rel="noreferrer">
            <StackSvg />
            <p>Stack Overflow</p>
          </a>
        </Icons>
        <Icons>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedInSvg />
            <p>LinkedIn</p>
          </a>
        </Icons>
      </ForMoreIcons>
    </Container>
  );
};

export default Socials;

const Container = styled.div`
background: rgb(203, 202, 202);
display: flex;
flex-direction: column;
align-items: center;
h2 {
    background: salmon;
    padding: 5px;
}
`;

const ForMoreIcons = styled.div`
display: flex;
flex-direction: wrap;
a {
    padding: 2.5rem;
}
`;

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: baseline;
p {
    text-decoration: none;
}
`;