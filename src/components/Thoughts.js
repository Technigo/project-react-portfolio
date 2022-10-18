import React from 'react';
import styled from 'styled-components';
import BigThought from './BigThought';
import OtherThought from './OtherThought';
import { GridWrapper } from './ReusableStyles.style';

const Thoughts = () => {
  return (
    <section className="code-thoughts show-off">
      <h2 className="grid-heading">My thoughts</h2>
      <StyledGridWrapperThoughts className="grid-wrapper thoughts-wrapper">
        <BigThought
          thoughtLink="https://medium.com/@elin.segelov/from-cleaning-toilets-to-cleaning-up-my-own-code-via-a-few-years-of-social-work-33e0aaf20722"
          thoughtImage="https://cdn-images-1.medium.com/max/1600/1*ag_0Ck6C2msskyeNuWjp9g.jpeg"
          publishDate="October 2022"
          thoughtTitle="From cleaning toilets to cleaning up my own code"
          overlayText="Changing careers"
          thoughtDescription="This August I joined a frontend developer bootcamp.
          In 22 weeks I am going to learn enough about frontend development to enable
          a career change into tech and I am loving every second of it." />
        <BigThought
          thoughtLink="#"
          thoughtImage="https://picsum.photos/200/300"
          publishDate="Comming soon"
          thoughtTitle="Code and accessibility"
          overlayText="Code and accessibility"
          thoughtDescription="Thoughts about accessibility in the digital world." />
      </StyledGridWrapperThoughts>

      <StyledOtherThoughts className="other other-thoughts">
        <h3 className="sub-heading">More Thoughts</h3>
        <OtherThought
          thoughtLink="#"
          publishDate="Comming soon"
          thoughtTitle="Aquiering a hobby" />
        {/*
        <OtherThought
          thoughtLink="#"
          publishDate="Fall 2022"
          thoughtTitle="Placeholder"/> */}
      </StyledOtherThoughts>
    </section>
  )
}

export default Thoughts;

const StyledGridWrapperThoughts = styled(GridWrapper)`
  
`
const StyledOtherThoughts = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;

  h3 {
  font-size: 17px;
  font-weight: 700;
  padding-left: 0;
  text-transform: uppercase;
  background: none;
  color: var(--heading);
  margin: 30px auto 20px;
}
`