import styled from 'styled-components'

export const OuterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const InnerWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;
export const SectionTitle = styled.div`
    display: table;
    text-align: center;
    color: whitesmoke;
    background-color: var(---secondary);
    font-size: 22px;
    line-height: 25px;
    text-transform: uppercase;
    margin: 20px auto;
    padding: 4px 8px;
    font-weight: bold;
`;
export const Tag = styled.div`
    display: flex;
    flex-wrap: wrap;
    p.tag {
    background-color: var(---highlight);
    color: whitesmoke;
    font-size: 12px;
    font-family: 'Roboto', sans-serif ;
    font-weight: bold;
    text-decoration: none;
    line-height: 12px;
    padding: 3px 5px;
    margin: 3px;
  }
  `;