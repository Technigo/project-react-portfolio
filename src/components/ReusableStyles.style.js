import styled from 'styled-components';

export const StyledTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -3px;

  p {
  background-color: var(--ligtherGreen);
  border-radius: 5px;
  color: #FFFFFF;
  font-family: "Roboto", sans-serif;
  font-size: 12px; 
  font-weight: bold;
  line-height: 12px;
  padding: 4px;
  margin: 3px;
  text-decoration: none;
}
a {
  background-color: var(--secondary);
  box-shadow: 2px 2px 2px var(--heading);
  color: var(--heading);
  border: 1px solid var(--heading);
  padding: 8px;
}
`
export const GridWrapper = styled.div`
  display: grid ;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  width: 90vw;
`

export const StyledListSection = styled.div`
  display: block;
  justify-self: center;
  text-align: center;
 
  ul {
  list-style-type: none;
  margin-bottom: 16px;
  }
  li {
  padding: 4px; 
  }
`