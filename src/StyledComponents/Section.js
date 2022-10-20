import styled from 'styled-components';

export const Section = styled.section`
    background-color: ${(props) => (props.first ? '#FAEDE8' : 'white')};
    padding: 55px;
    line-height: 30px;
    width: 1200px;
    margin: 0px auto;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

@media (max-width: 768px) {
    justify-content: center;
    margin: 0px auto;
    max-width: 400px;
    `;

export const SectionHeadline = styled.h1`
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    padding: 40px 0 10px 0;
    text-align: center;
    font-size: 25px;
    padding: 5px;
`;

export const SectionHeadlineBg = styled.span`
    background-color: #f0cfc4;
    padding: 5px;
`

export const SectionText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 29px;
    padding: 20px 70px;
    text-align: center;

@media (max-width: 768px) {
    padding: 15px;
`;