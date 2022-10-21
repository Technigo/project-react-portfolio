import styled from 'styled-components/macro'

export const OuterWrapper = styled.div`
    font-family: "Montserrat", "Roboto", sans-serif;
    justify-content: center;
  //margin-left: 5vw;
    //margin-right: 5vw;
`
export const SectionWrapper = styled.section`
    width: 100%;
    margin: 0;
    text-align: left;
    padding: 2rem 0;
    display: flex;
    flex-direction: row;
    `
export const ClonedSectionWrapper = styled(SectionWrapper)`
    background-color: #f4f4f4;
`
export const InnerWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  max-width: 25rem;

  @media(min-width: 768px) {
     width: 80%; 
     max-width: 35rem;
  };
   @media(min-width: 1024px) {
    width: 75%; 
    max-width: 50rem;
  }
`

export const HeadH4 = styled.h4`
    background-color: #990000;
    color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  padding: 3px;
  margin-bottom: 20px;
  letter-spacing: 0.03em;
  font-weight: bold;

  @media(min-width: 768px) {
     font-size: 22px;
  }
`
export const Text = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 4vh;
    padding: 1rem 0; 

    @media(min-width: 1024px) {
       line-height: 4vh;
        }
`

export const Link = styled.a`
    border-radius: 50%;
    border: solid white 2px;
    height: 40px;
    width: 40px;
    text-align: center;
    display: inline-block;
    transition: 0.2s;
    position: relative;

    @media(min-width: 768px)  {
     border: solid white 3px;
      height: 60px;
      width: 60px;
    };

    @media(min-width: 1024px) {
        &:Hover {
            transform: translate(-20%, -20%);
        }
    }
`
export const Icon = styled.svg`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media(min-width: 768px) {
      width: 40px;
        height: 40px;
    }
    @media(min-width: 1024px) {
        &:Hover {
        transform: translate(-40%, -40%);
    }
    }
    `
export const H5Head = styled.h5`
    color: #990000;
      font-size: 20px;
      padding-top: 30px;
      padding-bottom: 10px;
      text-transform: uppercase;
      text-align: center;
    `
