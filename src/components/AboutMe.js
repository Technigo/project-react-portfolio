import React from 'react';
/* import styled from 'styled-components/macro'; */
import { OuterWrapper, InnerWrapper } from '../styles/GlobalStyles';
import startSymbol from '../assets/lollipop.png';

const AboutMe = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <p>
          <startSymbol src={startSymbol} alt="lollipop separator" />
            Hello! I am a Frontend developer currently studying at Technigos bootcamp.
            So far we have covered a number of coding languages inclduing CSS, HTML, Javascript and
            we are currently coding in React.
            Before joining this course I was a Revenue Manager schooled in working strategicly
            with large amounts of data, PMS and I have spent a number of years in Managemnt teams
            in the Hospitality business.
        </p>
      </InnerWrapper>
    </OuterWrapper>
  )
}
export default AboutMe