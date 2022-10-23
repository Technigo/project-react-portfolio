import React from 'react';
import styled from 'styled-components';
import SectionHeaderStyling from 'styles/SectionHeaderStyling';
import data from 'data.json';

const Tech = () => {
/*   {data.albums.items.map(item => {
    return <Albumshero key={item.id} data= {item} />
  })}
   */
  const TechInfo = data.Tech.items;

  console.log(TechInfo)
  return (
    <TechStyling>
      <section className="section tech">
        <SectionHeaderStyling><div><h2>Tech</h2></div></SectionHeaderStyling>
        <p>hej
        </p>
      </section>
    </TechStyling>)
}

export default Tech

const TechStyling = styled.section`

`