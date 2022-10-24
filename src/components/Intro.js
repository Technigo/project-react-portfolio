import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';

export const Intro = () => {
  const IntroSection = styled.section`
    background: white;
    display: flex;
    justify-content: center;
  `;
  const IntroText = styled.div`
    color: #F090D9;
    text-align: center;
    padding: 120px 80px 50px 80px;
    font-size: 18px;
    font-weight: 500;
    width: 900px;
  `;
  const Line = styled.span`
    width: 30px;
    border: 1px solid var(---accent);
    display: inline-block;
    margin-bottom: 4px;
  `;

  const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: var(---accent);
    border-radius: 50%;
    display: inline-block;
  `;

  return (
    <OuterWrapper background>
      <InnerWrapper>
        <IntroSection>
          <IntroText>
            <p><Line /><Dot /> I&apos;m a Frontend developer and CX nerd
             who is looking to join a company with a digital product or service,
              where I can be part of building great user experiences.
             I&apos;ve lived in London, Berlin and Stockholm,
              and enjoy working in an international environment.
            </p>
          </IntroText>
        </IntroSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}