import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, /* Devices, */MainHeader, MainSections, Title, MainText } from 'styles/mainStyles';
import Item1Image from '../Images/computer.jpeg';

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
             a series of surprising discoveries.
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
  padding-bottom: 8%;
  text-decoration: none;
  color: black;
`

const ThoughtsImage = styled.img`
  width: 100%;
`

const ThoughtsText = styled(MainText)`
text-align: left;
margin: 0%;
`