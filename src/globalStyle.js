import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

:root {
  --primaryBackground:#7d6081;
  --secondaryBackground:white;
  --thirdBackground:#f4f4f4;
  --fourthTitle:#9b637c;
  --fifthSubTitle:#4d4d54;
  --sixthTitleSubtitle:#645caa;
  --seventhText:#4d4d54;
  --buttonBackground:#cacae0;

}

body {
  background-color: var(--secondaryBackground);
  width: 100%;
  color: var(--seventhText);
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 32px;

}

.text{
  font-size: 15px;
  letter-spacing: 1.1px;
  line-height: 30px;
  font-family: Montserrat, sans-serif;

}
/*TITLES*/

.box-title{
  padding: 15px 0px 15px 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
}

.sub-title{
  padding: 10px 0 10px 0;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  align-self: center;
  letter-spacing: 1px;
  color: var(--sixthTitleSubtitle);
  display: inline;
  justify-content: center;
}

.small-title {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: var(--sixthTitleSubtitle);
  font-weight: 800; /*Check why roboto fontweight not working*/
  line-height: 30px;
  margin: 0 0 10px 0;
}

`;

export default GlobalStyle;