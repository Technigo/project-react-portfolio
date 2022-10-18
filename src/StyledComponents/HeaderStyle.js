import styled from 'styled-components/macro'

export const HeaderWrapper = styled.header` 
    display: flex;
    flex-direction: row;
    color: white;
    height: 400px;
    background-color: #483643; 
    background-image: url("src/assets/background1.jpg");
    background-repeat: no-repeat;
    background-size: cover; 
`;

export const SmallHeading = styled.h3`
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    font-family: 'Montserrat', sans-serif;
`;

export const MediumHeading = styled.h2`
    line-height: 49px;
    font-size: 38px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
`;

export const BigHeading = styled.h1`
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    font-family: 'Roboto', sans-serif;
`;
