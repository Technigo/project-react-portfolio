import styled from 'styled-components/macro'

export const OuterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.background ? ' #F4F4F4' : 'white')};
`
export const InnerWrapper = styled.div`
    width: 75%;
    margin: 0 auto;
`

export const SectionTitle = styled.div`
    padding: 1px;   
    background-color: #0A638E;
    color: white;
    margin: 0 auto;
    border-radius: 8px;
    width: 200px;
    text-transform: uppercase;
    font-family: 'Montserrat';
    text-align: center;
    font-weight: 600;
`