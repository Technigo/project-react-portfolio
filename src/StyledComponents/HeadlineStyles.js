import styled from 'styled-components'

// Small
export const HeaderFirstHeading = styled.h1` 
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    font-family: 'Roboto', sans-serif;

    @media (min-width: 1025px) {
        font-weight: 400;
        font-size: 27px;
        line-height: 50px;
    }
`;

// Large
export const HeaderSecondHeading = styled.h2`
    line-height: 49px;
    font-size: 38px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    
    @media (min-width: 1025px) {
        line-height: 80px;
        font-size: 60px;
    }
`;

// Medium
export const HeaderThirdHeading = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    font-family: 'Montserrat', sans-serif;

    @media (min-width: 1025px) {
        font-weight: 700;
        font-size: 27px;
        line-height: 50px;
    }
`;

export const SectionHeading = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    color: white;
    line-height: 27px;
    background-color: #7c5f74;
    padding: 7px;
    align-self: center;
    justify-self: center;
    text-align: center;
    display: inline-block;
    margin-bottom: 4vh;
    border-radius: 4px;
`;

export const SubHeading = styled.h2`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 21px;
    line-height: 27px;
    text-align: center;
    color: #aa658f;
    padding: 15px;
`;
