import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';

export const Intro = () => {
  const IntroSection = styled.section`
    display: flex;
    justify-content: center;  
    background: white;
  `;
  const IntroText = styled.div`
    text-align: center;
    width: 900px;
    padding: 120px 80px 50px 80px;
    color: var(---primary);
    font-size: 18px;
    font-weight: 500;
  `;
  const Line = styled.span`
    display: inline-block;
    width: 30px;
    margin-bottom: 4px;
    border: 1px solid var(---accent);
  `;

  const Dot = styled.span`
    display: inline-block;
    height: 10px;
    width: 10px;
    background-color: var(---accent);
    border-radius: 50%;
  `;

  return (
    <OuterWrapper>
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