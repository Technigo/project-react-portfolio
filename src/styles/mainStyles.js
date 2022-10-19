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
  background-color: red;
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
  padding: 5% 0%;

  @media ${Devices.tablet} {
    width: 80%;
  }

  @media ${Devices.laptop} {
    width: 60%;
  }
`

export const MainSections = styled.section`
  background-color: ${(props) => (props.coloredBackground ? 'rgb(253, 248, 240)' : '#FFF')};
  width: 100vw;
  padding: 5%;
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
  color: white;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding: 2%;
  background-color: #e9722d;
  margin: 5% 10%;

  @media ${Devices.tablet} {
  font-size: 25px;
  padding: 2% 0%;
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

export const MainText = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  margin-inline-start: 10px;
  margin-inline-end: 10px;
  font-family: 'Montserrat', sans-serif;
`
