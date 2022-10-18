/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const MyTech = styled.div`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    margin-left: 5%;
    margin-right: 5%;
`

const Tech = () => {
  return (
    <MyTech>
      <p>HTML, CSS, Flexbox, JavaScript, Web Accessibly, API:s,
        mob-programming, pair-programming, Github, Slack, Figma, Node, React
      </p>
    </MyTech>
  )
}

export default Tech