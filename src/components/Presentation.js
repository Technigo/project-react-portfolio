import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, MainSections, MainText } from 'styles/mainStyles';
import startFigure from '../Images/start-figure.png';

const Presentation = () => {
  return (
    <MainSections coloredBackground>
      <PresentationWrapper>
        <PresentationText>
          <StartImage src={startFigure} alt="start-figure" />
          I’m a music loving gamer that have realized how much fun coding can
           be and how much you can do with computers. The more I learn the
           more fun I have and I’m looking forward to a future where I can
           continue to evolve and where there’s always something more to learn.
        </PresentationText>
      </PresentationWrapper>
    </MainSections>
  )
}

export default Presentation;

const PresentationWrapper = styled(InnerWrapper)`
  margin-top: 2%;
`

const StartImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 2%;
`

const PresentationText = styled(MainText)`
  text-align: left;
`