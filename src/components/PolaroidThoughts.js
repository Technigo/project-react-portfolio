import React from 'react';
import styled from 'styled-components/macro';

export const PolaroidTest = () => {
  return (
    <PictureContainer>
      <div className="polaroid image1">
        <img src="https://images2.imgbox.com/81/29/ktXm6dkw_o.jpg?download=true" alt="Image1" />
        <p>Write a first thought</p>
      </div>
      <div className="polaroid image2">
        <img src="https://images2.imgbox.com/67/bd/wSvF54Wi_o.jpg?download=true" alt="Image2" />
        <p>Write a second thought</p>
      </div>
    </PictureContainer>
  )
}

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .polaroid {
    border: 1px solid darkgrey;
    background-color: white;
    padding: 15px 15px 60px 15px;
    box-shadow: 5px 10px 10px darkgrey;
    margin-bottom: 20px;
    max-width: 320px;
  }

  @media (min-width: 753px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: 900px) {
    position: relative;
    height: 500px;
    
    .polaroid {
      position: absolute;
      border: 1px solid darkgrey;
      background-color: white;
      padding: 15px 15px 60px 15px;
      box-shadow: 5px 10px 10px darkgrey;
    }

    .polaroid:after {
      content: attr(polaroid-caption);
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: calc(100% - 20px);
      padding: 10px;
      font-size: 30px;
      text-align: center;
      font-family: 'Indie Flower', cursive;
    }
    
    .image1 {
      left: 60px;
      top: 100px;
      transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -webkit-transform: rotate(-10deg);
    }
    
    .image2 {
      left: 420px;
      top: 100px;
      transform: rotate(10deg);
      -ms-transform: rotate(10deg);
      -webkit-transform: rotate(10deg);
    }
  }
`