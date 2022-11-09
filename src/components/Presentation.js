import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, MainSections, MainText } from 'styles/mainStyles';
import startFigure from '../Images/start-figure.png';

// Short presentation text, will be updated with real text in the future
const Presentation = () => {
  return (
    <MainSections coloredBackground>
      <InnerWrapper>
        <PresentationText>
          <StartImage src={startFigure} alt="start-figure" />
          En bild säger mer än tusen ord, det är det jag älskar med bildberättandet
           och därmed möjligheten att med hjälp av bilder kunna skildra känslor och
           historier för andra människor. Mitt mål är att aldrig nöja mig och därmed
           sluta utvecklas, utan hela tiden sträva efter att bli bättre.
        </PresentationText>
      </InnerWrapper>
    </MainSections>
  )
}

export default Presentation;

const StartImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 2%;
`

const PresentationText = styled(MainText)`
  text-align: left;
`