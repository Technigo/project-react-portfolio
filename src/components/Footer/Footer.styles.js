/* eslint-disable linebreak-style */
import styled from 'styled-components/macro'
import { HeaderSocialBar } from 'components/Header/Header.styles'

export const StyledFooter = styled.footer`
    background: #6D8B74;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;

    a {
    text-decoration: none;
    color: #000000d9;
    }

`
export const FooterSocialBar = styled(HeaderSocialBar)`
    position: unset;
    right: unset;
    top: unset;
    display: flex;
    align-self: center;
    padding-top: 30px;

`

