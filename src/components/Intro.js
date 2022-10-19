import styled from 'styled-components'
import React from 'react-dom'

const Intro = () => {
  return (
    <StyledIntro>
      <div className="intro">
        <p><span className="line" /><span className="dot" />
        I am a driven and ambitious frontend developer.
        </p>
      </div>
    </StyledIntro>
  );
}

const StyledIntro = styled.div`
.intro {
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  height: 300px;
  text-align: left;
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