import React from 'react';
import styled from 'styled-components/macro';
import { OuterWrapper, InnerWrapper, Paragraph } from '../styles/GlobalStyles';
import lollipop from '../assets/lollipop.png';

const AboutMe = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Paragraph>
          <StartSymbol src={lollipop} alt="lollipop separator" />
            Hello! I am a Frontend developer currently studying at Technigos bootcamp.
            So far we have covered a number of coding languages inclduing CSS, HTML, Javascript,
            React and Redux.
            Before joining this course I was a Revenue Manager schooled in working strategicly
            with large amounts of data, property Mgmt Systems and I have spent a number of years
            in Management teams in the Hospitality business.
        </Paragraph>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const StartSymbol = styled.img`
  width: 3rem;

`

export default AboutMe