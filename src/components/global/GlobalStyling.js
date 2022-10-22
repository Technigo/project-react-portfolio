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
    padding: 10px;   
    background-color: #0A638E;
    color: white;
    margin: 0 auto 30px;
    border-radius: 3px;
    width: 200px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
`

export const Tag = styled.div`
    display: flex;
    flex-wrap: wrap;

    p {
    background: #18252a;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    font-family: 'Roboto', sans-serif ;
    font-weight: bold;
    text-decoration: none;
    line-height: 12px;
    padding: 5px;
    margin: 3px;
  }
`
