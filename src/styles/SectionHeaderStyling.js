import styled from 'styled-components';

const SectionHeaderStyling = styled.div`
div{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

h2 {
    background-color: #F6AD7B;
    width: fit-content;
    text-align: center;
    font-family: 'Raleway Dots', cursive;
    margin-top: 10px;
    padding: 6px;
    color: white;
    font-size: 20px;
  }

  /* TABLET */
  @media (min-width: 667px) and (max-width: 1024px) {
    
    h2 {
      margin-top: 8vw;
      font-size: 35px;
    }

  }
  
  @media (min-width: 1024px) {

    h2 {
      font-size: 48px;
      margin-top: 4vw;
    }

  }
`

export default SectionHeaderStyling