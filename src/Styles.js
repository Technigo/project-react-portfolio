import styled, { createGlobalStyle } from 'styled-components/macro';
import montserrat from './Fonts/Montserrat-Regular.ttf';
import montserratBold from './Fonts/Montserrat-Bold.ttf';
import roboto from './Fonts/Roboto-Regular.ttf';
import robotoBold from './Fonts/Roboto-Bold.ttf';

// Project fonts
export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  src: url(${montserrat});
}
@font-face {
  font-family: 'Montserrat Bold';
  src: url(${montserratBold});
}
@font-face {
  font-family: 'Roboto';
  src: url(${roboto});
}
@font-face {
  font-family: 'Roboto Bold';
  src: url(${robotoBold});
}
`;

// Project color theme
export const gallery = '#eeeeee';
export const ceruleanBlue = '#2a44c8';
export const shark = '#1c2325';
export const tagColor = '#2a44c841;';

// Re-usable wrappers for sections
export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InnerWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1100px;
`;
export const SectionOuter = styled(OuterWrapper)`
  padding: 50px 0;
  background: ${(props) => (props.gallery ? gallery : 'white')};

  @media (min-width: 800px) {
    padding: 100px 0;
  }
`;
export const SectionInner = styled(InnerWrapper)`
  font-family: 'Montserrat';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;

  p {
    font-size: 17px;
    line-height: 1.5;
    text-align: ${(props) => (props.textCentered ? 'center' : 'unset')};
  }

  span {
    color: ${ceruleanBlue};
  }

  @media (min-width: 800px) {
    p {
      font-size: 28px;
    }
  }
`;

export const SectionHeader = styled.h2`
  line-height: 1;
  margin-bottom: 40px;
  padding: 10px 15px;
  font-family: 'Montserrat Bold';
  background-color: ${ceruleanBlue};
  color: white;

  @media (min-width: 800px) {
    font-size: 42px;
    margin-bottom: 100px;
  }
`;

export const SectionSubHeader = styled.h3`
  font-size: 21px;
  padding: 10px 15px;
  font-family: 'Montserrat Bold';
  color: ${ceruleanBlue};
  margin-bottom: 20px;

  @media (min-width: 800px) {
    margin-bottom: 50px;
    font-size: 38px;
  }
`;

export const TagWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;

  @media (min-width: 800px) {
    margin-top: 7px;
    gap: 10px;
  }
`;

export const ProjectTags = styled.li`
  font-family: 'Roboto', sans-serif;
  color: black;
  background-color: ${tagColor};
  display: inline;
  padding: 2px;
  font-size: 14px;

  @media (min-width: 800px) {
    padding: 5px 10px;
    font-size: 16px;
  }
`;

export const FancyArrows = styled.span`
  padding: 0 5px;
  color: ${ceruleanBlue};
`;
