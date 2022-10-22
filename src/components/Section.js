import styled from 'styled-components';

export const Section = styled.section`
    background-color: ${(props) => (props.primary ? '#f4f4f4' : 'white')};
    padding: 10px;
    padding-bottom: 15px;
    text-align: center;
`

export const SectionHeader = styled.h2`
    color: #fff;
    background: #1C658C;
    border-radius: 3px;
    padding: 5px;
    width: fit-content;
    display: inline-block;
`