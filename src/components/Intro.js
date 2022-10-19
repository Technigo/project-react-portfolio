import styled from 'styled-components'
import React from 'react-dom'

const Intro = () => {
  return (
    <StyledIntro>
      <p><span className="line" /><span className="dot" />
      I am a driven and ambitious frontend developer.
      </p>
    </StyledIntro>
  );
}

const StyledIntro = styled.div`
border: 2px solid hotpink;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
justify-content: center;  
}

.line {
  border: 1px solid #99A799;
  width: 30px;
  display: inline-block;
  margin-bottom: 4px;
}

.dot {
  height: 10px;
  width: 10px;
  background-color: #99A799;
  border-radius: 50%;
  display: inline-block;
}
`

export default Intro;