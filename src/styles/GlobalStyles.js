import styled from 'styled-components/macro';

/* Remember = styled.item/section/h */

export const OuterWrapper = styled.section`
    border: solid 2px blue;
    background-color: whitesmoke;
    text-align: center;
    padding: 1rem 0;

/* Laptop */
@media (min-width: 668px) and (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

/* Desktop */
@media (min-width: 1025px) {
    //flex-direction: column;
    ///flex-wrap: wrap;
    //justify-content: space-between;
  }

`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-top: 2rem;
    padding-left: 3rem;
`;

export const ProjectWrapper = styled.section`
    border: solid 2px green;
    background-color: var(--main-bg-color);
    display:flex;
    flex-direction: column;
    align-items: stretch;

/* Desktop */
@media (min-width: 1025px) {
    padding-left: 6rem;
}

`;

export const InnerWrapper = styled.div`
    //background-color: lightgray;
    width: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Paragraph = styled.p`
    font-family: 'Montserrat';
    font-size: 1rem;
    font-weight: 400;
`;

export const LargeHeadline = styled.h1`
    font-family: 'Montserrat';
    font-size: 1,5rem;
    font-weight: 700;

`;

export const Image = styled.img`
  width: 100%;
  height: 375px;

`
export const MediumHeadline = styled.div`
    background-color: #EB7126;
    color: #F9FCFB;
    font-family: 'Montserrat';
    font-size: 1,5rem;
    font-weight: 700;

`

/* If this is not needed remove */
export const SmallHeadline = styled.h2`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #EB7126;
    text-transform: uppercase;
`;

export const ProjectCard = styled.div`
    border: solid 5px yellow;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-top: 1rem;
    text-decoration: none;
    text-align: left;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

export const Tag = styled.span`
    background-color: #5AE3E8;
    font-family: 'Roboto';
    font-weight: 550;
    text-decoration: none;
    color: #2b2e34;
    line-height: 1rem;
    border-radius: 5px;
    margin: 0.2rem;
    padding: 0.1rem;
 
`;