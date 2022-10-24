import React from 'react';
import styled from 'styled-components';
import startfigure from '../assets/start-figure.png';

const Summary = () => {
  return (
    <MyselfContainer>
      <p>
        <img src={startfigure} alt="start figure" />
        Hey! I&apos;m a student at Technigo boot camp, with skills in HTML, CSS and JavaScript.
        In a close future I will be able to work with Backend too.
      </p>
    </MyselfContainer>
  );
};

export default Summary;

const MyselfContainer = styled.div`
  background: rgb(203, 202, 202);
  padding: 3.5rem;
  font-size: large;

  img {
    width: 50px;
    hight: 25px;
    padding-right: 5px;
  }
 `;