import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <Container>
      <h2>Skills:</h2>
      <Info>
        <Tools>
          <h4>Tools:</h4>
          <p>
            VS Code <br />
            GitHub <br />
            StackOverflow <br />
          </p>
        </Tools>
        <Code>
          <h4>Code:</h4>
          <p>
            React <br />
            JavaScript ES6 <br />
            CSS3 <br />
            HTML5 <br />
          </p>
        </Code>
      </Info>
    </Container>
  )
};

export default Skills;

const Container = styled.div`
margin: 1.5rem;
display: flex;
flex-direction: column;
align-items: center;
h2 {
    background: salmon;
    padding: 5px;
}

`;

const Info = styled.div`
display: flex;
flex.direction: wrap;
`;

const Tools = styled.div`
display: flex;
flex-direction: column;
h4 {
    font-size: large;
    color: salmon;
}
`;

const Code = styled.div`
display: flex;
flex-direction: column;
margin-left: 4rem;
h4 {
    font-size: large;
    color: salmon;
}
`;