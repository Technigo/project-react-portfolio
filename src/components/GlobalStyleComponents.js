import styled from 'styled-components';

export const OuterWrapper = styled.section` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.section` 
    width: 80%;
    margin: 0 auto;
`;

export const SectionHeadline = styled.h2`
  background-color: #54BAB9;
  color: whitesmoke;
  display: inline-block;
  padding: 4px;
  margin: 20px 0 20px 0;
  font-weight: bold;
`;

export const SectionHeader = styled.h2`
  font-size: 50px;
  line-height: 1;
  padding: 10px 15px;
  margin-bottom: 100px;
  font-family: "Montserrat Bold";
  background-color: ${(props) => props.color};
  color: white;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 1;
    padding: 10px 15px;
    margin-bottom: 40px;
  }
`;

export const ProjectTags = styled.li`
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 5px 10px;
  background-color: ${(props) => props.tagColor};
  display: inline;
  font-size: 16px;
  margin-right: 5px;

  @media (max-width: 800px) {
    padding: 2px;
    font-size: 14px;
    margin-right: 3px;
  }
`;
