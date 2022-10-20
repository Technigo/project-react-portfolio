/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/bibiruu" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://www.linkedin.com/in/maria-so-bbb471215/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://www.facebook.com/SoMustonen" target="_blank" rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials