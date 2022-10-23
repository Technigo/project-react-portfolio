import styled from 'styled-components'

export const Tag = styled.span`
    font-family: "Roboto", sans-serif;
    color: #2b2e34;
    font-weight: 400;
    background-color: #edccd5;
    text-decoration: none;
    font-size: 14px; 
    line-height: 12px;
    padding: 5px;
    margin: 2px;
    border-radius: 2px;
`

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
`