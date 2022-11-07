import styled from 'styled-components';

export const OuterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
`

export const InnerWrapper = styled.section`
  margin: 0 auto;
  width: 80%;
  max-width: 1200px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`