import styled from 'styled-components'

const PageSection = styled.section`
  padding: 60px 0;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`

export default PageSection