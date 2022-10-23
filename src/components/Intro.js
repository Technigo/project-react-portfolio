import React from 'react';
import styled from 'styled-components';

const Intro = () => {
  return (
    <SectionContainer>
      {/* <SectionText> */}
      <p className="intro-text">
        <Line className="line" /><Dot className="dot" />
            Hello! Currently studying at Technigo to become a frontend developer.
            I have a bachelor degree in Information Systems
            and work today as an Senior IT Operations Specialist to ensure that
            the day-to-day operations run smoothly.
            My goal is to strive to learn and gain more knowledge in programming.
      </p>
      {/* </SectionText> */}
    </SectionContainer>
  )
}

export default Intro;

const SectionContainer = styled.section`
    /* display: block;
    text-align: center;
    margin-bottom: 50px; */
    
    padding: 55px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) and (max-width: 991px) {
        padding: 20px 50px;
    }
    @media (min-width: 992px) {
        padding: 50px 15%;
    }
`
//     display: flex;
//     text-align: center;
//     margin-bottom: 50px;
// `
/* const SectionText = styled.MainText`
     box-sizing: border-box;
     margin: 0 auto;
     padding: 40px 24px;
     width: 675px;
     text-align: center;
` */
const Line = styled.span`
    border: 1px solid #7bce7b;
    width: 40px;
    display: inline-block;
    margin-bottom: 4px;
`
const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #1b6f22;
    border-radius: 50%;
    display: inline-block;
`