/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const MyThoughts = styled.div`
background: #F4F4F4;
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    margin-left: 5%;
    margin-right: 5%;
`

const Blog = () => {
  return (
    <MyThoughts>
   Blog post
    </MyThoughts>
  )
}

export default Blog