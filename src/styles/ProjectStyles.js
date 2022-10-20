import styled from 'styled-components/macro';

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
`

export const ParagraphProject = styled.p`
  font-family: 'Roboto';
  margin: 1vh 0 1vh 0;
  font-size: 17px;
`

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
