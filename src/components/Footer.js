/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import styled from 'styled-components';
import { InnerWrapperFooter, OuterWrapperFooter } from 'styles/ProjectStyles';

const Footer = () => {
  const contactInfo = [
    {
      title: 'CONTACT',
      name: 'David Ballester',
      telefon: '+46 7 08 36 37 17',
      email: 'dballesterfont@gmail.com'
    }
  ]
  return (
    <OuterWrapperFooter>
      <InnerWrapperFooter>
        <FooterWrapper>
          {contactInfo.map((info) => {
            return (
              <FooterCard>
                <FooterInfo>
                  <FooterParagraphStyle>
                    <p tabIndex="0"><span>{info.title}</span></p>
                    <p tabIndex="0">{info.name}</p>
                    <p>
                      <a
                        className="address-style"
                        href={`tel:${info.telefon}`}>{info.telefon}
                      </a>
                    </p>
                    <address>
                      <p>
                        <a
                          className="address-style"
                          href={`mailto:${info.email}`}>
                          {info.email}
                        </a>
                      </p>
                    </address>
                  </FooterParagraphStyle>
                </FooterInfo>
              </FooterCard>
            )
          })}
        </FooterWrapper>
      </InnerWrapperFooter>
    </OuterWrapperFooter>
  )
}
export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

const FooterCard = styled.div`
  width: 100%;
  margin: 10vh 0 10vh 0;
`

const FooterInfo = styled.div`
  width: 100%;
  font-family: 'Montserrat';
  font-style: normal;
`

const FooterParagraphStyle = styled.div`
  & p, a {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
    margin: 0;
  }
  & span {
    font-weight: 700;
  }  
`