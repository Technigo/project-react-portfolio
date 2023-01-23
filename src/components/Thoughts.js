import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, Devices, MainHeader, MainSections, Title, MainText } from 'styles/mainStyles';
import Item1Image from '../Images/computer.png';
import Item2Image from '../Images/mathbook.jpeg';

// Section that links to the article on medium
const Thoughts = () => {
  return (
    <MainSections>
      <InnerWrapper>
        <MainHeader>MY THOUGHTS ABOUT CODE</MainHeader>
        <ThoughtsWrapper>
          <ThoughtsLinks href="https://medium.com/@linda.malm237/my-journey-into-code-d99d7eda6d7d">
            {/* Image by StockSnap from Pixabay */}
            <ThoughtsImage src={Item1Image} />
            <Title>My journey into code</Title>
            <ThoughtsText>It feels like my work-life has been
             a series of surprising discoveries...
            </ThoughtsText>
          </ThoughtsLinks>
          <ThoughtsLinks href="https://medium.com/@linda.malm237/how-i-learned-to-love-coding-math-ee960ff8a13a">
            {/* Image by Joshua_seajw92 from Pixabay */}
            <ThoughtsImage src={Item2Image} />
            <Title>How I learned to love coding math</Title>
            <ThoughtsText>I&apos;ve always struggled with math, not
               because it was hard but...
            </ThoughtsText>
          </ThoughtsLinks>
        </ThoughtsWrapper>
      </InnerWrapper>
    </MainSections>
  )
}

export default Thoughts;

const ThoughtsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ThoughtsLinks = styled.a`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 270px;
  /* padding-bottom: 8%; */
  padding: 5% 2%;
  text-decoration: none;
  color: black;

  @media ${Devices.laptop} {
    &:hover {
      text-decoration: underline;
      color: #6fb9bd;
    }
  }
`

const ThoughtsImage = styled.img`
  width: 100%;
`

const ThoughtsText = styled(MainText)`
text-align: left;
margin: 0%;
`