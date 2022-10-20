import React from 'react'

export const Header = () => {
  return (
    <header className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="findme-icons" id="header-icons">
          <a href="https://linkedin.com/in/jnbjensen">
            <img className="header-findme-icon" title="My LinkedIn profile" alt="link to Niclas' LinkedIn profile" src="./.img/icon-github.png" />
          </a>
          <a href="https://github.com/jnbjensen">
            <img className="header-findme-icon" title="My GitHub profile" alt="link to Niclas' GitHub profile" src="img/icon-github.png" />
          </a>
          <a href="https://stackoverflow.com/users/19388159/niclas-jensen">
            <img className="header-findme-icon" title="My StackOverflow profile" alt="link to Niclas' StackOverflow profile" src="img/icon-stackoverflow.png" />
          </a>
        </div>
        <div id="header-text">
          <h1>PORTFOLIO: NICLAS JENSEN</h1>
          <h2 id="big-h2">frontend developer</h2>
          <h2 id="small-h2">+ language specialist</h2>
        </div>
        <div id="profile-image">
          <img src="./img/profile-image.jpg" alt="Profile" />
        </div>
      </div>
    </header>
  )
}