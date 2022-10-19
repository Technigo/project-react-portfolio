/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const HeaderSocialBar = styled.div`
  position: absolute;
  right: 20px;
  top: 100px;
  display: flex;
  flex-direction: row;

  img {
    width: 55px;
    margin-left: 10px;
    filter: invert();

    &:hover {
    opacity: 0.6;
  }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    right: 50px;
  }

  @media (min-width: 992px) {
    right: 150px;
  }


`

/* export const ForMoreSocialBar = styled.div`
  position: absolute;
  right: 20px;
  top: 100px;
  gap: 15px;

a {
  width: 55px;
  filter: invert(1);

  &:hover {
  opacity: 0.6;
}
}

` */