import styled from 'styled-components';

export const MainText = styled.p`
    width: 80%;
    font-family: "Montserrat", sans-serif;
    font-style: 400;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    margin: 0;
    text-align: left;
    overflow-wrap: break-word;
`

export const CenterMainText = styled(MainText)`
    text-align: center;
`

export const Title = styled.h2`
background-color: #677867;
text-transform: uppercase;
border-radius: 3px;
padding: 5px;
font-size: 22px;
color: white;
display: inline-block;
`

export const SecondTitle = styled.h2`
text-transform: uppercase;
border-radius: 3px;
padding: 5px;
font-size: 22px;
color: #677867;
display: inline-block;
`

export const Section = styled.section`
border: 2px solid black;
display: flex;
flex-direction: column;
height: 250px;
align-items: center;
justify-content: center;
`

export const Wrapper = styled.section`
border: 2px solid purple;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
width: 100%;
height: 300px;
`

