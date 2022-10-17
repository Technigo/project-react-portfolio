import React from 'react';
import styled from 'styled-components';

import HeaderLinks from './HeaderLinks';

const HeaderImg = styled.header`
    background-image: url(./assets/headerimg.jpg);
    position: relative;
    height: 520px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    `

const Header = () => {
  return (
    <>
      <HeaderImg />
      <HeaderLinks />
    </>

  )
}

export default Header;