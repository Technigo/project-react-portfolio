import styled from 'styled-components/macro';
// ---- Wrappers ---
export const OuterWrapper = styled.div`
  font-family: "Montserrat", "Roboto", sans-serif;
  justify-content: center;
`;
export const SectionWrapper = styled.section`
  width: 100%;
  margin: 0;
  text-align: left;
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
`;
export const ClonedSectionWrapper = styled(SectionWrapper)`
  background-color: #f4f4f4;
`;
export const InnerWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  max-width: 25rem;

  @media (min-width: 768px) {
    width: 80%;
    max-width: 35rem;
  }
  @media (min-width: 1024px) {
    width: 75%;
    max-width: 50rem;
  }
`;
// ---- Heads ----
export const HeadWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const HeadH4 = styled.h4`
  background-color: #990000;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  padding: 3px;
  margin-bottom: 20px;
  letter-spacing: 0.03em;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
export const H5Head = styled.h5`
  color: #990000;
  font-size: 20px;
  padding-top: 30px;
  padding-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
`;
