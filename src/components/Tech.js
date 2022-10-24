import React from 'react';
import styled from 'styled-components';
import SectionHeaderStyling from 'styles/SectionHeaderStyling';
import data from 'data.json';

const techInfo = data.Tech.items;
const itemList = techInfo.map(({ Technique }) => Technique).join(', ');

console.log(itemList)
const Tech = () => {
  return (
    <TechStyling>
      <section className="section-tech">
        <SectionHeaderStyling><div><h2>Tech</h2></div></SectionHeaderStyling>
        <p> {itemList}
        </p>
      </section>
    </TechStyling>)
}

export default Tech

const TechStyling = styled.section`

  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    font-size: 16px;
  }

  @media (min-width: 667px) and (max-width: 1024px){
    p {
      width: 70vw;
      font-size: 20px; 
    }
  }
  
  @media (min-width: 1024px) {
    p {
      font-size: 22px; 
    }
  }
    




`