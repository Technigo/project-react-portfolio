import styled from 'styled-components/macro';

/* WRAPPERS */
export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const InnerWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 500px;
  flex-direction: column;
  position: absolute;
  @media (min-width: 1024px) {
    width: 60%
  }
`
export const OuterWrapperSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.grey ? '#f4f4f4' : '#ffffff')};
`
export const InnerWrapperSection = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 60%
  }
`
export const OuterWrapperFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a374d;
`
export const InnerWrapperFooter = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
`
/* TAGS */
export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
  margin: ${(props) => (props.margin ? '5vh auto' : '0')};
  & h5 {
    color: #2b2e34;
    font-weight: bold;
    background-color: ${(props) => (props.grey ? '#bbbbbb' : '#b1d0e0')};
    font-size: 12px;
    line-height: 12px;
    padding: 4px;
    margin: 10px 0;
    border-radius: 5px;    
  }
  @media (min-width: 668px) {
    & h5 {      
      font-size: 14px;
      line-height: 14px;
      padding: 6px;      
    }
    & :hover {
        filter: ${(props) => (props.hover ? 'brightness(75%)' : 'brightness(100%)')};
      }
    }
`
/* TITLES */

export const BlueTitle = styled.h3`
  font-family: 'Montserrat';
  margin: 5vh auto;
  padding: 0.5vh 0.5vh;
  margin-bottom: 0;  
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  background-color: #406882;
  color: #ffffff;
`

export const WhiteTitle = styled.h3`
  margin: 5vh 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #406882;
`

/* p */
export const ParagraphProject = styled.p`
  font-family: 'Roboto';
  margin: 1vh 0 1vh 0;
  font-size: 17px;
`