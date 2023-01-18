import styled from 'styled-components/macro';

export const OuterWrapper = styled.section`
    background-color: whitesmoke;
    text-align: center;
    padding: 1rem 0;

    @media (min-width: 668px) {
    padding: 3.5rem 0;
  }

`;

export const HeaderWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    padding-top: 2rem;
`;

export const InnerWrapper = styled(HeaderWrapper)`
  padding-top: 0rem;
  padding-bottom: 2.5rem;

  @media (min-width: 668px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const AlignLeftWrapper = styled(InnerWrapper)`
  flex-direction: column;
  text-align: left;
`

export const Paragraph = styled.p`
  font-family: 'Montserrat';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding-top: 0.8rem;
  margin: 0 auto;

  @media (min-width: 668px) {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
  @media (min-width: 1025px) {
    width: 68%;
  }
`;

export const LargeHeadline = styled.h1`
  font-family: 'Montserrat';
  font-size: 1,5rem;
  font-weight: 600;
  line-height: 1.7rem;
  background-color: #EB7126;
  padding: 2px;
  border-radius: 5px;
  display: inline-block;
  width: fit-content;
  text-align: center;
  color: white;
  margin-bottom: 2rem;

  @media (min-width: 668px) {
    font-size: 1.7rem;
    margin-bottom: 2.5rem;
  }
`;

export const MediumHeadline = styled.h2`
    color: #F9FCFB;
    font-family: 'Montserrat';
    font-size: 1,5rem;
    line-height: 1.6rem;
    font-weight: 600;
    margin: 1.5rem 0;

  @media (min-width: 668px) {
    font-size: 1.5rem;
  }
`

/* If this is not needed remove */
export const SmallHeadline = styled.h3`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #EB7126;
    text-transform: uppercase;

    @media (min-width: 668px) {
    font-size: 1.3rem;
  }
`;

export const ProjectCard = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-top: 1rem;
    text-decoration: none;
    text-align: left;

    @media (min-width: 668px) and (max-width:1024px) {
    width: 35vw;
  }
    @media (min-width: 1025px) {
    cursor: pointer;
    width: 35vw;
  }
`;

export const Image = styled.img`
  width: 100%;
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