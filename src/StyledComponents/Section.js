import styled from 'styled-components';

export const Section = styled.section`
    background-color: ${(props) => (props.first ? 'white' : '#FAEDE8')};
`;

export const SectionHeadline = styled.h1`
    font-family: 'Montserrat', sans-serif;
`;
