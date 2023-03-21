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
    margin: 20px auto;
    padding: 4px 8px;
    text-align: center;
    text-transform: uppercase;
    line-height: 25px;
    background-color: var(---primary);
    color: whitesmoke;
    font-size: 22px;
    font-weight: bold;
    @media (max-width: 820px) {
        font-size: 18px;
      }
`;
export const Tag = styled.div`
    margin: 4px 3px 5px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    p.tag {
      padding: 3px 5px;
      text-decoration: none;
      line-height: 12px;
      background-color: var(---highlight);
      color: whitesmoke;
      font-family: 'Roboto', sans-serif ;
      font-size: 12px;
      font-weight: bold;
    }
`;