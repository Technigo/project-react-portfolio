// import React from 'react'
import styled from 'styled-components'

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.beige ? '#F1EFDC' : 'white')};
`

export const InnerWrapper = styled.section`
width: 90%;
padding: 50px 0px;
@media (min-width: 1025px) {
  width: 70%;
}
`

export const Heading = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 700;
  display: inline;
  margin-bottom: 30px;
  padding: 4px;
  text-align: center;
  color: ${(props) => (props.dark ? '#F1EFDC' : '#42032C')};
  background-color: ${(props) => (props.dark ? '#42032C' : 'none')};
`

export const Topics = styled.p`
font-family: "Roboto", sans-serif;
    color: #2b2e34;
    font-weight: bold;
    background-color: #db9aab;
    display: inline;
    text-decoration: none;
    line-height: 12px;
    padding: 4px;
    margin: 3px;
    border-radius: 5px;
`