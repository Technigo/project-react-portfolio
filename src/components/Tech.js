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
      <section className="section tech">
        <SectionHeaderStyling><div><h2>Tech</h2></div></SectionHeaderStyling>
        <p> {itemList}
        </p>
      </section>
    </TechStyling>)
}

export default Tech

const TechStyling = styled.section`

`