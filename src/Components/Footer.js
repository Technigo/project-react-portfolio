/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const ForMore = styled.div`

`

const ContactContainer = styled.div`
width: 100%;
    height: 50vh;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    background-color: blue;
`

const Footer = () => {
  return (
    <>
      <ForMore />
      <ContactContainer>
Contact me
      </ContactContainer>
    </>
  )
}

export default Footer