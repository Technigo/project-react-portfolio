import styled from 'styled-components/macro'

export const InnerWrapper = styled.div`
    background-color: ${(props) => (props.color ? '#578e8724' : '#FFFFF')};
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`