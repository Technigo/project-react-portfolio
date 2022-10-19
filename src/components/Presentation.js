import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, MainSections, MainText } from 'styles/mainStyles';
import startFigure from '../Images/start-figure.png';

const Presentation = () => {
  return (
    <MainSections coloredBackground>
      <InnerWrapper>
        <PresentationText>
          <StartImage src={startFigure} alt="start-figure" />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis illo enim assumenda
        eligendi a ad omnis tenetur! Recusandae molestias reprehenderit sed corrupti, non iste
        praesentium at quasi sit saepe quaerat! Explicabo similique sequi numquam quis! Minima
        iste quod, eveniet temporibus doloribus harum blanditiis tempora hic architecto, fugit
        qui error repellat voluptas labore!
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