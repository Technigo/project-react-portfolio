import React from 'react';
import { InnerWrapper, /* Devices, */MainHeader } from 'styles/mainStyles';

const Main = ({ category }) => {
  return (
    <InnerWrapper>
      <MainHeader>{category}</MainHeader>
    </InnerWrapper>
  )
}

export default Main;

// const MainSections = styled`
//   padding: 20% 7% 10% 7%;

//   @media ${Devices.tablet} {
//     padding: 10% 7%;
//   }

//   @media ${Devices.laptop} {
//     padding: 10% 0%;
//   }

//   @media ${Devices.desktop} {
//     padding: 0% 0%;
//   }
// `