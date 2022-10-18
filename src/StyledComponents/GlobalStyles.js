import styled from 'styled-components';

export const OuterWrapper = styled.section`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: ${(props) => (props.grey ? '#F4F4F4;' : 'white')}
`;

export const InnerWrapper = styled.section`
    width: 80%;
    padding-top: 7vh;
    padding-bottom: 7vh;
`;