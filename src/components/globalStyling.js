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
    padding: 0.5rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
`

export const TitleTertiary = styled.h3`
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${(props) => (props.selectedColor)};
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 5px;
    margin-top: ${(props) => (props.marginTop)};
    `

export const TitleQuaternary = styled.h4`
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.8rem;
    color: #2f694d;
    text-transform: uppercase;
    margin: 0.5rem 0rem;

`

export const IconGroup = styled.div`
    position: ${(props) => (props.position)};
    top: ${(props) => (props.top)};
    right: ${(props) => (props.right)};
    display: flex;
    width: 100%;
    justify-content:${(props) => (props.justifyContent)};
  `

export const SingleTag = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    line-height: 0.9rem;
    background-color: #ffe7c0;
    margin: 10px 8px 0px 0px;
    padding: 3px 8px;
    border-radius: 2px;
    width: fit-content;
`