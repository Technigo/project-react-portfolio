import React from 'react';
import styled from 'styled-components/macro';
import BigThought from './BigThought';
import OtherThought from './OtherThought';
import { SubHeading, GridWrapper, StyledOther } from './ReusableStyles.style';
import thoughtData from '../utils/thoughtData.json'

const Thoughts = () => {
  const bigThoughtsArray = thoughtData.bigThoughts;
  const OtherThoughtsArray = thoughtData.otherThoughts;

  const allBig = bigThoughtsArray.map((thought) => {
    return (
      <BigThought
        key={thought.id}
        thoughtLink={thought.link}
        thoughtImage={thought.image}
        publishDate={thought.monthYear}
        thoughtTitle={thought.title}
        overlayText={thought.overlayText}
        thoughtDescription={thought.description} />
    )
  })
  const allOther = OtherThoughtsArray.map((thought) => {
    return (
      <OtherThought
        key={thought.id}
        thoughtLink={thought.link}
        publishDate={thought.monthYear}
        thoughtTitle={thought.title} />
    )
  })
  return (
    <StyledProjectSection>
      <h2>My thoughts</h2>
      <GridWrapper>
        {allBig}
      </GridWrapper>

      <StyledOtherThoughts>
        <SubHeading>More Thoughts</SubHeading>
        {allOther}
      </StyledOtherThoughts>
    </StyledProjectSection>
  )
}

export default Thoughts;

const StyledProjectSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledOtherThoughts = styled(StyledOther)`
  h3 {
  font-size: 17px;
  font-weight: 700;
  padding-left: 0;
  text-transform: uppercase;
  background: none;
  color: var(--heading);
  margin: 30px auto 20px;
}
@media (min-width: 600px) {
  justify-content: left; 
  width: 80vw;
  }
@media (min-width: 992px) {
  width: 60vw;
}
`