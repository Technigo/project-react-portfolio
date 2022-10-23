import styled from 'styled-components';

export const Title = styled.h1`
    flex-direction: column;
    background-color: #677867;
    text-transform: uppercase;
    border-radius: 3px;
    padding: 5px;
    font-size: 22px;
    color: white;
    display: inline-block;
`

export const SecondTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;
    border-radius: 3px;
    padding: 5px;
    font-size: 22px;
    color: #677867;
`
export const SecondTitleWhite = styled(SecondTitle)`
    color: white;
`

export const MainText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-style: 400;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    margin: 0;
    text-align: left;
    overflow-wrap: break-word;
    text-decoration: none;
    color: black
    &a:link {
        textDecoration: none;
        color: black;
      }
`

export const CenterMainText = styled(MainText)`
    text-align: center;
`

export const MainTextWhite = styled(MainText)`
    text-align: center;
    color: white;
    width: auto;
`

export const Section = styled.section`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const SectionColor = styled(Section)`
    background-color: white;
`

export const Wrapper = styled.section`
    width: 80%;
    @media (min-width: 798px) {
    width:60%
    }
`
export const WrapperRow = styled(Wrapper)`
    display: flex;
    margin: 10px;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    @media (min-width: 798px) {
        width:50%
        }
`
