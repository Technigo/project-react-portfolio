import React, { useState } from 'react'
import styled from 'styled-components';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }
  return (
    <Navigation>
      <button onClick={handleToggle} type="button">{navbarOpen ? 'Close' : 'Open'}</button>
      <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>...</ul>
    </Navigation>
  )
}; export default NavBar

const Navigation = styled.div` 
position: relative;
 button {
    position: fixed;
    left: 40px;
    top: 40px;
    z-index: 10;
    cursor: pointer;
  }
  
  .menuNav {
    overflow-y: scroll;
    list-style: none;
    position: fixed;
    top: 0;
    background: darkcyan;
    left: 0;
    bottom: 0;
    height: 100vh;
    width: 0;
    overflow: hidden;
    max-width: 290px;
    z-index: 9;
  }
  
  .menuNav.showMenu {
    width: 100%;
  }
  
  a {
    display: block;
    padding: 10px 40px;
    text-decoration: none;
    color: #3fffd2;
    text-transform: uppercase;
    font-weight: bold;
  }
  
  .menuNav li:first-child {
    margin-top: 7rem;
  }
  `