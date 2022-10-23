import React from 'react';
/* import styled from 'styled-components/macro'; */
import { OuterWrapper, InnerWrapper } from '../styles/GlobalStyles';
import StartSymbol from '../assets/lollipop.png';

const AboutMe = () => {
  return (
    <OuterWrapper BackroundColor="whitesmoke">
      <InnerWrapper BackgroundColor="hotpink">
        <p>
          <StartSymbol src={StartSymbol} alt="lollipop separator" />
            Hello! I&aposm a Frontend developer currently taking the 22 week bootcamp at Technigo.
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