import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';

export const Footer = () => {
  const FooterBackground = styled.footer`
    border-top: solid 2px var(---primary);
    background-color: var(---highlight);
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 70px 0px;
  `;

  const FooterWrapper = styled.div`
    width: 280px;
    padding-bottom: 25px;
    text-align: center;
    background-color: var(---highlight);
    color: whitesmoke;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    h4 {
      padding: 4px 8px;
      margin: 20px 0px 5px 0px;
      text-transform: uppercase;
      line-height: 25px;
      font-size: 22px;
      font-weight: bold;
    }
  `;

  const Mail = styled.a`
    padding: 3px;
    text-decoration: none;
    line-height: 16px;
    background-color: var(---highlight);
    color: whitesmoke;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>
        <FooterBackground>
          <FooterWrapper>
            <h4>contact</h4>
            <p>Caroline Söderström</p>
            <Mail href="mailto:caroline.soderstrom@gmail.com">caroline.soderstrom@gmail.com</Mail>
            <p>Remote, Europe</p>
          </FooterWrapper>
        </FooterBackground>
      </InnerWrapper>
    </OuterWrapper>
  )
}