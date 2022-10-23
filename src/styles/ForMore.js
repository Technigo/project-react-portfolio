import styled from 'styled-components'

export const IconsWrapper = styled.div`
display: flex;
width: 250px;
justify-content: space-between;
flex-direction: row;
text-decoration: none;
`

export const Icon = styled.img`
background-color: #677867;
border-radius: 50%;
border: 2px solid white;
width: 100px;
`
export const Link = styled.a`
a:link {
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-style: 400;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    margin: 0;
    text-align: left;
    overflow-wrap: break-word;
  }

a:hover {
    text-decoration: underline;
  }
`