import styled from 'styled-components/macro';

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const Devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`
};

export const OuterWrapper = styled.div`
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
`

export const InnerWrapper = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;

  @media ${Devices.tablet} {
    width: 80%;
  }

  @media ${Devices.laptop} {
    width: 60%;
  }
`

export const LinkedItems = styled.a`
  color: #D64819;
  cursor: pointer;
  text-decoration: none;

  @media ${Devices.tablet} {
    width: 20%;
  
    &:hover {
      text-decoration: underline;
    }
  }
`

export const MainHeader = styled.h2`
  font-weight: bold;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding: 5%;
  background-color: #e9722d;
  margin: 5%;

  @media ${Devices.tablet} {
  font-size: 25px;
  padding: 2%;
  }
`

export const SecondHeader = styled.h3`
  color: #D64819;
  font-weight: bold;
  font-size: 17px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding: 5%;

  @media ${Devices.tablet} {
    font-size: 24px;
  }
`

