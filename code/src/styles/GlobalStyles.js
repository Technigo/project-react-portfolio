import styled from 'styled-components/macro';

// STRUCTURAL STYLE-COMPONENTS (used in several sections of the page)
export const OuterWrapper = styled.section`
  background-color: ${(props) => props.backGroundcolor};
  text-align: center;
  padding: 2rem 0;

  @media (min-width: 668px) {
    padding: 3.5rem 0;
  }
`
export const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding-top: 1.5rem;
`

export const InnerWrapper = styled(HeaderWrapper)`
  padding-top: 0rem;
  background-color: ${(props) => props.backGroundcolor};
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
  color: ${(props) => props.color};
  font-family: 'Montserrat';
  font-size: 1.06rem;
  line-height: 1.8rem;
  padding-top: 0.8rem;
  margin: 0 auto;

  @media (min-width: 668px) {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  @media (min-width: 1025px) {
    width: 68%;
  }
`

export const MainHeadline = styled.h2`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 1.35rem;
  line-height: 1.7rem;
  background-color: #BA4C08;
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
`

export const MediumHeadline = styled.h3`
  color: ${(props) => props.color};
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.6rem;
  margin: 1.5rem 0;

  @media (min-width: 668px) {
    font-size: 1.5rem;
  }
`

export const SmallHeadline = styled.h4`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color:  #BA4C08;
  text-transform: uppercase;

  @media (min-width: 668px) {
    font-size: 1.3rem;
  }
`

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
`

export const Image = styled.img`
  width: 100%;
`

export const Tags = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  background-color: #8ECEDC;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 3px;
  border-radius: 5px;
`