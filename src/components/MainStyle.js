import styled from 'styled-components/macro'

export const Body = styled.body`
    background-color: white;
    font-family: "Montserrat", "Roboto", sans-serif;
`
export const OuterWrapper = styled.section`
  width: 100%;
  margin: 0;
  text-align: left;
  padding: 2rem 0; //används ej nu - se över
`
export const InnerWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 600px; // ändra
  };

  @media (min-width: 1024px) {
    width: 900px; //ändra
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

  @media (min-width: 768px) {
    font-size: 22px;
  }
`
export const Text = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 4vh;
    padding: 1rem 0;
    // props för InfoP
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

    @media (min-width: 768px)  {
      border: solid white 3px;
      height: 60px;
      width: 60px;
    };

    @media (min-width: 1024px) {
        :Hover {
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

    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
    }
        
    @media (min-width: 1024px) {
        :Hover {
        transform: translate(-40%, -40%);
    }
    }
    `