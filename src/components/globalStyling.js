import styled from 'styled-components/macro'

export const OuterWrapper = styled.div`
    background-color: ${(props) => (props.selectedColor)};

`
export const InnerWrapper = styled.div`
    padding: 3rem 0;
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width:1025px) {
            max-width: 880px;
    }
`
export const MainHeaders = styled.h2`
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.7rem;
    text-align: center;
    background-color: #285841;
    color: white;
    padding: 0.5rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
`

export const TitleTertiary = styled.h3`
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${(props) => (props.selectedColor)};
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 5px;
    margin-top: ${(props) => (props.marginTop)};
    `

export const TitleQuaternary = styled.h4`
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.5rem;
    color: #285841;
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
    gap: 10px;
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
    white-space: nowrap;
`

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;    

    @media (min-width: 668px) {
        grid-template-columns: repeat(2, 1fr);
    }
 `