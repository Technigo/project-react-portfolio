/* eslint-disable linebreak-style */
import styled from 'styled-components'
import { SectionHeadings, SectionText } from 'Globalstyles'

export const StyledFooter = styled.footer`
    background: linear-gradient(
      353deg,
      rgb(146 54 54) 0%,
      rgb(177 78 78) 11%,
      rgb(166 84 80) 42%,
      rgb(136 78 78 / 89%) 86%
    );
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
    text-decoration: none;
    color: #ffff;
    }

`
export const FooterHeading = styled(SectionHeadings)`
    color: #ffffff;
    background-color: transparent;
    padding-bottom: 1rem;
`

export const FooterText = styled(SectionText)`
    color: #fff;
`

