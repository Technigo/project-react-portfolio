import styled from 'styled-components/macro'

export const InnerWrapper = styled.div`
    background-color: ${(props) => (props.selectedColor)};
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const MainHeaders = styled.h2`
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2rem;
    text-align: center;
    background-color: #2f694d;
    color: white;
    padding: 1%;
    margin-bottom: 4%;
    text-transform: uppercase;
`

export const StyledH3 = styled.h3`
    font-size: 21px;
    line-height: 25px;
    color: ${(props) => (props.selectedColor)};
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 5px;
    margin-top: ${(props) => (props.marginTop)};
    `

export const StyledH4 = styled.h4`
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.8rem;
    color: #2f694d;
    text-transform: uppercase;
`

export const IconGroup = styled.div`
    position: ${(props) => (props.position)};
    top: ${(props) => (props.top)};
    right: ${(props) => (props.right)};
    display: flex;
    width: 100%;
    justify-content:${(props) => (props.justifyContent)};
  `