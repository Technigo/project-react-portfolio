import styled from 'styled-components/macro'

export const IntroWrapper = styled.div`
    padding: 65px 24px 35px 24px;
    background-color: #F4F4F4;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Line = styled.span`
    border: 1px solid #483643;
    width: 40px;
    display: inline-block;
    margin-bottom: 4px;
`;

export const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #483643;
    border-radius: 50%;
    display: inline-block;
`;

export const Intro = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 29px; 
`;